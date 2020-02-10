import React from 'react';
import { ScrollView, StyleSheet, View, Platform ,Text,TouchableOpacity, Dimensions } from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import Polyline from '@mapbox/polyline'
import {Searchbar, IconButton} from 'react-native-paper'
import Autocomplete from 'react-native-autocomplete-input'
MapboxGL.setAccessToken(
  "pk.eyJ1Ijoib2ZmbGVyIiwiYSI6ImNrNmFla3hxbjA1OWkzanByNWY0Mnk0Y2EifQ.ncj7U_L-IOPOrQ0l4I4OHQ"
)

let width = Dimensions.get('window').width
let height = Dimensions.get('window').height
let IS_ANDROID = Platform.OS==='android';
export default class HomeScreen extends React.Component {
  async UNSAFE_componentWillMount(){
    if(IS_ANDROID){
      let isGranted= await MapboxGL.requestAndroidLocationPermissions();
      this.setState({
        isAndroidPermissionGranted:isGranted,
        isFetchingAndroidPermission:false,
      })
    }
  }

  constructor(props){
    super(props)
    this.state={
      isAndroidPermissionGranted:false,
      isFetchingAndroidPermission:IS_ANDROID,
      coordinate:[[]],
      data:[],
      showUserLocation:true,
      location:[104.030457,1.082828],
      pickupLoc:''
    }
    this.pickupLocation=this.pickupLocation.bind(this)
  }

  async getDirections(startLoc, destinationLoc) {

    try {
        let resp = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${startLoc}.json?proximity=104.030457,1.082828&access_token=pk.eyJ1Ijoib2ZmbGVyIiwiYSI6ImNrNmFla3hxbjA1OWkzanByNWY0Mnk0Y2EifQ.ncj7U_L-IOPOrQ0l4I4OHQ`)
        let respJson = await resp.json();
        let points = Polyline.decode(respJson.routes[0].overview_polyline.points);
        let coords = points.map((point, index) => {
            return  {
                latitude : point[0],
                longitude : point[1]
            }
        })
        this.setState({coords: coords})
        this.setState({x: "true"})
        return coords
    } catch(error) {
      console.log('masuk fungsi')
        this.setState({x: "error"})
        return error
    }
}

  async pickupLocation(pickupLoc){
    try {
      let resp = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickupLoc}.json?access_token=pk.eyJ1Ijoib2ZmbGVyIiwiYSI6ImNrNmFla3hxbjA1OWkzanByNWY0Mnk0Y2EifQ.ncj7U_L-IOPOrQ0l4I4OHQ`)
      console.log('resp',resp)
      let respJson = await resp.json();
      this.setState({data:respJson.features})
      console.log('respJson',respJson.features)
      let points = Polyline.decode(respJson.routes[0].overview_polyline.points);
      //console.log('point',points)
      // let coords = points.map((point, index) => {
      //     return  {
      //         latitude : point[0],
      //         longitude : point[1]
      //     }
      // })
  //     this.setState({coords: coords})
  //     this.setState({x: "true"})
  //     return coords
  } catch(error) {
    console.log('masuk fungsi')
      this.setState({x: "error"})
  //     return error
  }
  }
  renderAnnotations(){
    return(
      <MapboxGL.PointAnnotation
      key="pointAnnotation"
      id="pointAnnotation" 
      coordinate={[104.030457,1.082828]}>
        <View style={styles.annotaionContainer}>
          <View style={styles.annotationFill} />
          <MapboxGL.Callout title="An annotation here!"/>
        </View>
      </MapboxGL.PointAnnotation>
    )
  }
  render(){
    console.log('btm',this.state.data)
    console.log('coor',this.state.coordinate)
    return (
        <View style={styles.container}>
          {/* <Searchbar placeholder="pickup location" 
          value={this.state.pickupLoc}
          onChangeText={pickupLoc=> this.setState({pickupLoc:pickupLoc}, this.pickupLocation(pickupLoc))}
          // onIconPress={()=>this.pickupLocation(this.state.pickupLoc)}
          /> */}
          <Autocomplete placeholder='Pick Up Location' style={{backgroundColor:'gray'}}
          defaultValue={this.state.pickupLoc}
          data={this.state.data}
          onChange={(pickupLoc)=> this.setState({pickupLoc:pickupLoc})}
          onChangeText={(pickupLoc)=> this.pickupLocation(pickupLoc)}
          keyExtractor={({index})=> index}
          renderItem={( {item,x} )=> {
            console.log('item',item.place_name)
            return (
              <View style={{width:width}}>
            <TouchableOpacity key={x} onPress={()=>this.setState({coordinate: item.geometry.coordinates, pickupLoc:item.place_name})}>
              <Text style={{fontSize:20,borderBottomWidth:1,backgroundColor:'white',color:'gray'}}>{item.place_name}</Text>
              </TouchableOpacity>
              </View>)
          }}/>
          <MapboxGL.MapView
          ref={c=>(this._map=c)}
          zoom={9} 
          centerCoordinate={[1.082828,104.030457]}
          showUserLocation={true}
          styleURL={MapboxGL.StyleURL.Street}
          userTrackingMode={this.state.userSelectedUserTrackingMode}
          style={styles.map}>
            <MapboxGL.Camera
            zoomLevel={16}
            animationMode={'flyTo'}
            animationDuration={0}
            ref={c=>(this.camera=c)}
            centerCoordinate={[104.030457,1.082828]}
            >
            </MapboxGL.Camera>
          </MapboxGL.MapView>
        </View>
    )
  }
}

HomeScreen.navigationOptions = {
  title: 'Home',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //height: width * (2/3),
    position:'absolute'
  },
  map:{
    width:width,
    height:height
    //marginTop:800
  },
  annotaionContainer:{
    width:30,
    height:30,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'white',
    borderRadius:15
  },
  annotationFill:{
    width:30,
    height:30,
    borderRadius:15,
    backgroundColor:'blue',
    transform:[{scale:0.6}]
  }
});

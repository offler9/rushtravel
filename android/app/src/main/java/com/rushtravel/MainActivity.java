package com.rushtravel;

import android.os.Bundle;
import com.mapbox.mapboxsdk.Mapbox;
import com.mapbox.mapboxsdk.maps.MapView;
import com.mapbox.mapboxsdk.maps.MapboxMap;
import com.mapbox.mapboxsdk.maps.OnMapReadyCallback;
import com.mapbox.mapboxsdk.maps.Style;
import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

// import androidx.annotation.NonNull;
// import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends ReactActivity {

    //private MapView mapView;

    /**
     * Returns the name of the main component registered from JavaScript. This is
     * used to schedule rendering of the component.
     */
    @Override
    // protected void onCreate(Bundle savedInstanceState) {
    //     super.onCreate(savedInstanceState);
    //     Mapbox.getInstance(this,"pk.eyJ1Ijoib2ZmbGVyIiwiYSI6ImNrNmFla3hxbjA1OWkzanByNWY0Mnk0Y2EifQ.ncj7U_L-IOPOrQ0l4I4OHQ");
    //     setContentView(R.layout.activity_main);
    //     mapView = findViewById(R.id.mapView);
    //     mapView.onCreate(savedInstanceState);
    //     mapView.getMapAsync(new OnMapReadyCallback() {
    //         @Override
    //         public void onMapReady(@NonNull MapboxMap mapboxMap) {
    //             mapboxMap.setStyle(Style.MAPBOX_STREETS, new Style.OnStyleLoaded() {
    //                 @Override
    //                 public void onStyleLoaded(@NonNull Style style) {

    //                     // Map is set up and the style has loaded. Now you can add data or make other
    //                     // map adjustments.

    //                 }
    //             });
    //         }
    //     });
    // }

    // @Override
    // public void onStart() {
    //     super.onStart();
    //     mapView.onStart();
    // }

    // @Override
    // public void onResume() {
    //     super.onResume();
    //     mapView.onResume();
    // }

    // @Override
    // public void onPause() {
    //     super.onPause();
    //     mapView.onPause();
    // }

    // @Override
    // public void onStop() {
    //     super.onStop();
    //     mapView.onStop();
    // }

    // @Override
    // public void onLowMemory() {
    //     super.onLowMemory();
    //     mapView.onLowMemory();
    // }

    // @Override
    // protected void onDestroy() {
    //     super.onDestroy();
    //     mapView.onDestroy();
    // }

    // @Override
    // protected void onSaveInstanceState(Bundle outState) {
    //     super.onSaveInstanceState(outState);
    //     mapView.onSaveInstanceState(outState);
    // }

    protected String getMainComponentName() {
        return "rushtravel";
    }

    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
        return new ReactActivityDelegate(this, getMainComponentName()) {
            @Override
            protected ReactRootView createRootView() {
                return new RNGestureHandlerEnabledRootView(MainActivity.this);
            }
        };
    }
}

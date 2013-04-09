package com.example.hellophonegap;

import org.apache.cordova.DroidGap;

import android.os.Bundle;
import android.app.Activity;
import android.view.Menu;

public class MainActivity extends DroidGap {

	
	public void onCreate(Bundle savedInstanceStage)
	{
		super.onCreate(savedInstanceStage);
		super.loadUrl("file:///android_asset/www/index.html");
	}

}

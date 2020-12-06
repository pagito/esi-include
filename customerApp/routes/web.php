<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::group(['middleware' => ['cors']], function() {
	Route::get('/', function () {
		return view('welcome');
	});
	Route::get('/test-esi', function () {
    	return view('partial/page');
	});
});

Route::get('/get-esi', ['as' => 'get-esi', 'uses' => 'IndexController@getesi']);


Route::get('my-page', function(){
	return view('wallet');
});

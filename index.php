<?php   
	/*
		Plugin Name: Plug & Play
		Description: <strong>Plug and Play</strong> our feautures and turn your WordPress Blog into a <strong>Highly Interactive, Elegant and Secure</strong> Blog.
		Plugin URI: https://wordpress.org/plugins/plug-and-play/
		Version: 1.2
		Author: Bassem Rabia
		Author URI: mailto:bassem.rabia@gmail.com
		License: GPLv2
	*/
	
	// delete_option('bPressSignature');
	// delete_option('bPressServices');
		
	require_once(dirname(__FILE__).'/bPress/WP2P.class.php');
	$WP2P = new WP2P(); 
	function papLanguage(){
		load_plugin_textdomain('bPress', false, basename(dirname(__FILE__) ).'/bPress/lang'); 
	}
	add_action('plugins_loaded', 'papLanguage');
?>
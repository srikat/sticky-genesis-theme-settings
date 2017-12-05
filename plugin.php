<?php
/**
 * Plugin Name: Sticky Genesis Theme Settings
 * Plugin URI: https://github.com/srikat/Sticky-Genesis-Theme-Settings
 * Description: A simple plugin to add smooth scrolling jump links on the Genesis theme settings page in the WordPress backend.
 * Version: 1.0.0
 * Author: Sridhar Katakam
 * Author URI: https://sridharkatakam.com/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * GitHub Plugin URI: srikat/Sticky-Genesis-Theme-Settings
 *
 * This program is free software; you can redistribute it and/or modify it under the terms of the GNU
 * General Public License version 2, as published by the Free Software Foundation.  You may NOT assume
 * that you can use any other version of the GPL.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without
 * even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 *
 */

if ( ! defined( 'WPINC' ) ) {
	die;
}

add_action( 'admin_enqueue_scripts', 'custom_admin_genesis_settings_page' );
/**
 * Load CSS and JS on the Genesis Theme Settings page in the WordPress backend.
 */
function custom_admin_genesis_settings_page( $hook ) {
	// if we are not on the Genesis Theme Settings page, abort.
	if ( 'toplevel_page_genesis' !== $hook ) {
		return;
	}

	wp_enqueue_style( 'genesis-settings-page-styles', plugin_dir_url( __FILE__ ) . '/assets/css/style.css' );

	wp_enqueue_script( 'genesis-settings-page-js', plugin_dir_url( __FILE__ ) . '/assets/js/main.js' );
}

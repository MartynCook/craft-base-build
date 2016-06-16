<?php

/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/general.php
 */

return array(

    '*' => array(
        'omitScriptNameInUrls' => true,
    ),

    'craft-basebuild.dev' => array(
        'devMode' => true,
        'baseCpUrl' => 'http://craft-basebuild.dev/',
    ),

/*
    'dev.URL' => array(
        'devMode' => true,
        'baseCpUrl' => 'http://admin.example.com/',
    ),

    'stage.URL' => array(
        'devMode' => true,
        'baseCpUrl' => 'http://admin.example.com/',
    ),

    'production.URL' => array(
        'devMode' => true,
        'baseCpUrl' => 'http://admin.example.com/',
    ),
*/
);
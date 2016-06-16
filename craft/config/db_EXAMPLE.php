<?php

/**
 * Database Configuration
 *
 * All of your system's database configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/db.php
 */

return array(
    '*' => array(
        'tablePrefix' => 'craft',
    ),

    'siteUrl_1.com' => array(
        'server' => 'localhost',
        'user' => 'root',
        'password' => 'root',
        'database' => 'databaseName',
    ),

    'lsiteUrl_2.com' => array(
        'server' => 'localhost',
        'user' => 'databaseuser',
        'password' => 'password',
        'database' => 'database',
    ),

);
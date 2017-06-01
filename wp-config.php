<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'informgroup');

/** MySQL database username */
<<<<<<< HEAD
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');
=======
define('DB_USER', 'chris');

/** MySQL database password */
define('DB_PASSWORD', 'chris1234');
>>>>>>> c759ed13a9f95e6f73cd8692c8328601e13d9d6e

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '-^&Nil*{oxyzTj5|DFs^(QV0/>W6$L~c{bUGD1=44||gkY6v.tgY}rj%)[.<{$bs');
define('SECURE_AUTH_KEY',  'R=6Z@Kx9zA8a:RA}>k@@/GDw4>A7+6zjo;a2J^KdoA%:yU.2.#Fv6F<zH)EWLY@@');
define('LOGGED_IN_KEY',    'KJXN>fE33YRXhgt,w[3y+0a9@6stz[dF]P-zf(>fK5;<]q6BrR>FSd5adcOP2>=0');
define('NONCE_KEY',        '-o+mim2FBs<!/-8&+b%pq^%GCyMLgAgQw@=L&$(-NGI350%D*Lk3~fi!)tEk ;L|');
define('AUTH_SALT',        'WBr&qcn,r!!1;A*iQpz( e?l1GV28X3{s?VbyIz i?G3.e6Q3?,A? yk#{b%6O-A');
define('SECURE_AUTH_SALT', '6ju.B7$<tEQJZbJsa[Sz>+|!-pp)U4:DjU:Gcv/?KJ)Xi0HfI2yEz%lq0PP~[Feo');
define('LOGGED_IN_SALT',   '3/PMAiMKJ*0B`NvOoJ*WoozGQo{3dBMB:+[RgZkSA2*n,vl6<59PjxNyc,/uugnz');
define('NONCE_SALT',       'Mk%l|aCl&6L@ZvG$Zbo)+?gq@97p,|xucUx$tz,9K>_:56[X!eJ,z!o9H`09^YPF');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

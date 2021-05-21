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
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'tanhoangloc' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '3kZvuQiFvu#{aJ^p-z][wo?m7=3]@ijFz3gM>DYx7C1@w.a6N8YyEZO;~86cAB!v' );
define( 'SECURE_AUTH_KEY',  'VEm^7, GA2-q}Zw<|G?4QM_;ryay)X*czp!:]<5.`tcJv2O,b`+Vs{Ymbqsk[XZ:' );
define( 'LOGGED_IN_KEY',    '^ABaDoQj*s(MCfR1aL4c*b;5Sp$qi(U6y42D90)bm~5))wbV-(oUpL3?54~}jvH=' );
define( 'NONCE_KEY',        '[0eqLXxR?w)bg4~@olT0 o3/AwR`il=4Nmkk(2RLtM{r~?X_~t-BGc%ZC]N^WD1:' );
define( 'AUTH_SALT',        'p=FH,UwD:6Ey|gB(-0LyO5XmZ9HX_ZnLH[*suD(U#nS;mRB<9(;o[o|;$A6B@(4O' );
define( 'SECURE_AUTH_SALT', 'I bJ%m]<cu;9PAX4Ygj|svy!H0YGM_,t%Y*tAFVJIAb{0w{4=%I,.M*q&2xkCCY0' );
define( 'LOGGED_IN_SALT',   'e(qH*.=NRgGO.+i-bUyyus-H99t;:0mjzCJAO$fUKJG13hw6F}0)g7-kQ2mFSx]R' );
define( 'NONCE_SALT',       '-/>`E417Sd33R^k)3 QUu$V@{RxX{El2i2&|#ket)H`g&l<pD >g-WI[t[mmY~|}' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

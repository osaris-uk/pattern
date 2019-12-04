# pattern
A simple pattern for Laravel 6

## Installation

`composer create-project osaris-uk/pattern --prefer-dist projectname`

After composer has finished hook up your DB in .env and run `php artisan migrate`

Be sure to recompile front end assets (npm run dev) once you have updated your .env file with your APP_URL.

## What is pattern?

Pattern is a simple boilerplate for Laravel applications.  It includes a standard laravel installation but with some other features pre-configured:

 - Role & Permission based access control using [osaris-uk/access](https://github.com/osaris-uk/access)
   - Plus basic admin layout and sidenav menu
 - Log viewing in app using [osaris-uk/log-viewer](https://github.com/osaris-uk/log-viewer)
 - Cached database driven app settings using [osaris-uk/app-settings](https://github.com/osaris-uk/app-settings)
 - Database driven admin navigation using [osaris-uk/navigation](https://github.com/osaris-uk/navigation)
 - Reusable vue Data Table component.
 - [Sweet Alert](https://github.com/t4t5/sweetalert) preinstalled
 - Notifications built in using [Notify](https://github.com/codecourse/notify)
 - EU cookie consent using [Cookieconsent](https://github.com/insites/cookieconsent)
 - 'My Account' Area including dashboard, account update and change password functionality
 - [Font Awesome](https://fontawesome.com/) Free 5.10.2 preinstalled

## New features / issues

If you have any ideas for other features to include or see any issues you can submit a PR, alternatively get in touch and I'll have a look.

## Thanks to..

 - Laravel is a fantastic PHP framework to work with, check it out [here.](https://laravel.com/)
 - [Codecourse](https://www.codecourse.com)
 
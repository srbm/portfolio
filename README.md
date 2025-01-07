This is the portfolio website for Shawn Meyer, a web developer.
[See it live](https://shawnrbmeyer.com)

## Technologies Used

- React
- HTML
- CSS
- JavaScript

Setup

1. Clone the repository
2. Run `npm install`
3. Run `npm start`

Deploy

1. Run `npm run build`
2. The files in the `build` folder are the static files for the website
3. Upload the files to the web server
4. Move `fetch_moon_phase.php` to your root
5. Set up a cron job to run the php script every 4 hours
  -  This creates the json file that the app will call to get moon data.

Alternative Deploy
1. Run the deploy.sh script from the home folder.
  - This script presumes both you temp folder and your web root folder are in your home folder.

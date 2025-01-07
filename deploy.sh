 #!/bin/bash
   
   # Navigate to a temporary directory
   cd ~/temp-deploy-srbm

   # Clone or pull the latest changes
   if [ -d ".git" ]; then
     git pull origin main
   else
     git clone https://github.com/srbm/portfolio.git .
   fi

   # Navigate to the web root
   cd ~/shawnrbmeyer.com

   # Move the build files to the web root
   # This line removes all the files on the root except the moon json data file.
   find . -maxdepth 1  -type f ! -name 'moon_phase_data.json' -exec rm -r {} +
   rm -rf static/
   cp -a  ~/temp-deploy-srbm/build/. .

    #   Clean up
    #   rm -rf ~/temp-deploy-srbm/*
    #   Don't clean up b/c the next pull wont put the whole repo in this folder to move over. It will only download the changes which leads to broken images among other things.
# HugoTail

A black & white minimalistic portfolio theme made using Hugo and Tailwindcss.

* Hugo Version - 0.110.0
* Tailwind Version - 3.2

## How to use it?

* Download this theme `hugotail` and put it inside `themes/` folder
* For **Development**:
    * Run `hugo server -t hugotail --disableLiveReload` from your project's root folder and run `npm run dev` from this `hugotail/` theme folder for starting a development server.
    * Now you can design your layouts using tailwind css and it will generate the required classes for you. Please note that live reload has been disabled for syncing issues.
* For **Production**:
    * First run `npm run build` from theme `hugotail/` folder (for css minification), and then
    * `hugo -t hugotail --cleanDestinationDir --minify` from your project's root folder (for html minification).
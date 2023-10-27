//#region IMPORTS
//#endregion IMPORTS

//#region TEMPLATE
const christmas_tree = document.createElement('template');
christmas_tree.innerHTML = /* html */ `
<style>
        @import './components/christmas_tree/style.css';
</style>
<div id="christmas_tree">
    <div class="tree">
        <div class="tree__light"
            style="--appear: 0; --y: 0; --rotate: 1440; --radius: 12.5; --speed: 5.649675846128252; --delay: -8.246110285653497;">
        </div>
        <div class="tree__light"
            style="--appear: 1; --y: 2; --rotate: 1411.2; --radius: 12.25; --speed: 5.106187765773742; --delay: -8.974798565892092;">
        </div>
        <div class="tree__light"
            style="--appear: 2; --y: 4; --rotate: 1382.4; --radius: 12; --speed: 7.483154353239943; --delay: -1.9495361099134123;">
        </div>
        <div class="tree__light"
            style="--appear: 3; --y: 6; --rotate: 1353.6000000000001; --radius: 11.75; --speed: 1.34864053222991; --delay: -0.9587705689300297;">
        </div>
        <div class="tree__light"
            style="--appear: 4; --y: 8; --rotate: 1324.8; --radius: 11.5; --speed: 2.296909097350286; --delay: -5.757479300414612;">
        </div>
        <div class="tree__light"
            style="--appear: 5; --y: 10; --rotate: 1296; --radius: 11.25; --speed: 4.100808805422536; --delay: -0.7342564003784613;">
        </div>
        <div class="tree__light"
            style="--appear: 6; --y: 12; --rotate: 1267.2; --radius: 11; --speed: 1.2009899529580181; --delay: -4.2636708977199955;">
        </div>
        <div class="tree__light"
            style="--appear: 7; --y: 14; --rotate: 1238.4; --radius: 10.75; --speed: 4.619708088488026; --delay: -9.860075596064679;">
        </div>
        <div class="tree__light"
            style="--appear: 8; --y: 16; --rotate: 1209.6000000000001; --radius: 10.5; --speed: 3.4453795203196536; --delay: -3.2541107716531115;">
        </div>
        <div class="tree__light"
            style="--appear: 9; --y: 18; --rotate: 1180.8; --radius: 10.25; --speed: 7.4442228206305945; --delay: -5.441647053562557;">
        </div>
        <div class="tree__light"
            style="--appear: 10; --y: 20; --rotate: 1152; --radius: 10; --speed: 7.838503110513568; --delay: -3.3479679670033735;">
        </div>
        <div class="tree__light"
            style="--appear: 11; --y: 22; --rotate: 1123.2; --radius: 9.75; --speed: 4.127215094468157; --delay: -0.7135154975030056;">
        </div>
        <div class="tree__light"
            style="--appear: 12; --y: 24; --rotate: 1094.4; --radius: 9.5; --speed: 6.387717539522835; --delay: -0.9904130203368622;">
        </div>
        <div class="tree__light"
            style="--appear: 13; --y: 26; --rotate: 1065.6000000000001; --radius: 9.25; --speed: 8.670704845067636; --delay: -7.598618297574684;">
        </div>
        <div class="tree__light"
            style="--appear: 14; --y: 28; --rotate: 1036.8; --radius: 9; --speed: 7.08339055148145; --delay: -0.6161194671230708;">
        </div>
        <div class="tree__light"
            style="--appear: 15; --y: 30; --rotate: 1008; --radius: 8.75; --speed: 7.96509437947279; --delay: -6.211630530473151;">
        </div>
        <div class="tree__light"
            style="--appear: 16; --y: 32; --rotate: 979.2; --radius: 8.5; --speed: 1.1404005152337904; --delay: -7.481149722316847;">
        </div>
        <div class="tree__light"
            style="--appear: 17; --y: 34; --rotate: 950.4; --radius: 8.25; --speed: 3.749792563235017; --delay: -9.504567473987288;">
        </div>
        <div class="tree__light"
            style="--appear: 18; --y: 36; --rotate: 921.6; --radius: 8; --speed: 3.744835795113226; --delay: -9.13212093188286;">
        </div>
        <div class="tree__light"
            style="--appear: 19; --y: 38; --rotate: 892.8000000000001; --radius: 7.75; --speed: 8.359032142543057; --delay: -6.097195894163798;">
        </div>
        <div class="tree__light"
            style="--appear: 20; --y: 40; --rotate: 864; --radius: 7.5; --speed: 8.080063495780248; --delay: -1.9819574079117674;">
        </div>
        <div class="tree__light"
            style="--appear: 21; --y: 42; --rotate: 835.2; --radius: 7.25; --speed: 6.171122051857423; --delay: -9.839231170004805;">
        </div>
        <div class="tree__light"
            style="--appear: 22; --y: 44; --rotate: 806.4; --radius: 7; --speed: 9.208956424382695; --delay: -6.359468337920102;">
        </div>
        <div class="tree__light"
            style="--appear: 23; --y: 46; --rotate: 777.6; --radius: 6.75; --speed: 1.0508016663530584; --delay: -6.987437060077166;">
        </div>
        <div class="tree__light"
            style="--appear: 24; --y: 48; --rotate: 748.8000000000001; --radius: 6.5; --speed: 3.79128072892023; --delay: -0.009325537014588381;">
        </div>
        <div class="tree__light"
            style="--appear: 25; --y: 50; --rotate: 720; --radius: 6.25; --speed: 0.00015542468875695548; --delay: -3.4661702463925637;">
        </div>
        <div class="tree__light"
            style="--appear: 26; --y: 52; --rotate: 691.2; --radius: 6; --speed: 8.499662285570311; --delay: -5.856169421521522;">
        </div>
        <div class="tree__light"
            style="--appear: 27; --y: 54; --rotate: 662.4; --radius: 5.75; --speed: 0.14443482416676368; --delay: -5.717535037662715;">
        </div>
        <div class="tree__light"
            style="--appear: 28; --y: 56; --rotate: 633.6; --radius: 5.5; --speed: 8.889316853559372; --delay: -0.4271477233866072;">
        </div>
        <div class="tree__light"
            style="--appear: 29; --y: 58; --rotate: 604.8000000000001; --radius: 5.25; --speed: 2.212192797450927; --delay: -2.5549095271215516;">
        </div>
        <div class="tree__light"
            style="--appear: 30; --y: 60; --rotate: 576; --radius: 5; --speed: 0.7053869021347747; --delay: -4.727281529587217;">
        </div>
        <div class="tree__light"
            style="--appear: 31; --y: 62; --rotate: 547.2; --radius: 4.75; --speed: 8.599272627295736; --delay: -0.6263371797120199;">
        </div>
        <div class="tree__light"
            style="--appear: 32; --y: 64; --rotate: 518.4; --radius: 4.5; --speed: 4.75906337597589; --delay: -0.9662383113821749;">
        </div>
        <div class="tree__light"
            style="--appear: 33; --y: 66; --rotate: 489.6; --radius: 4.25; --speed: 3.11579249179327; --delay: -5.6422493190415395;">
        </div>
        <div class="tree__light"
            style="--appear: 34; --y: 68; --rotate: 460.8; --radius: 4; --speed: 2.956662867254991; --delay: -6.671062042129825;">
        </div>
        <div class="tree__light"
            style="--appear: 35; --y: 70; --rotate: 432; --radius: 3.75; --speed: 9.450174647416494; --delay: -4.911391914660266;">
        </div>
        <div class="tree__light"
            style="--appear: 36; --y: 72; --rotate: 403.2; --radius: 3.5; --speed: 3.711018354354676; --delay: -3.145746524608928;">
        </div>
        <div class="tree__light"
            style="--appear: 37; --y: 74; --rotate: 374.40000000000003; --radius: 3.25; --speed: 3.7152329860566757; --delay: -4.948468735485639;">
        </div>
        <div class="tree__light"
            style="--appear: 38; --y: 76; --rotate: 345.6; --radius: 3; --speed: 9.409194967345735; --delay: -4.187505121757167;">
        </div>
        <div class="tree__light"
            style="--appear: 39; --y: 78; --rotate: 316.8; --radius: 2.75; --speed: 8.336394199760306; --delay: -3.8004456416929555;">
        </div>
        <div class="tree__light"
            style="--appear: 40; --y: 80; --rotate: 288; --radius: 2.5; --speed: 6.093013509390306; --delay: -7.639708785033072;">
        </div>
        <div class="tree__light"
            style="--appear: 41; --y: 82; --rotate: 259.2; --radius: 2.25; --speed: 1.7235534846238032; --delay: -0.0020014471653362342;">
        </div>
        <div class="tree__light"
            style="--appear: 42; --y: 84; --rotate: 230.4; --radius: 2; --speed: 5.654863998384361; --delay: -3.058607422317532;">
        </div>
        <div class="tree__light"
            style="--appear: 43; --y: 86; --rotate: 201.6; --radius: 1.75; --speed: 7.1845655580545476; --delay: -1.9683608960532695;">
        </div>
        <div class="tree__light"
            style="--appear: 44; --y: 88; --rotate: 172.8; --radius: 1.5; --speed: 7.140499592144771; --delay: -0.06807031616478554;">
        </div>
        <div class="tree__light"
            style="--appear: 45; --y: 90; --rotate: 144; --radius: 1.25; --speed: 1.0585900229518708; --delay: -8.31755018928338;">
        </div>
        <div class="tree__light"
            style="--appear: 46; --y: 92; --rotate: 115.2; --radius: 1; --speed: 9.637893705202563; --delay: -8.045639915525635;">
        </div>
        <div class="tree__light"
            style="--appear: 47; --y: 94; --rotate: 86.4; --radius: 0.75; --speed: 4.378078334724524; --delay: -8.980367593579292;">
        </div>
        <div class="tree__light"
            style="--appear: 48; --y: 96; --rotate: 57.6; --radius: 0.5; --speed: 0.8384782100409804; --delay: -0.002084898867458218;">
        </div>
        <div class="tree__light"
            style="--appear: 49; --y: 98; --rotate: 28.8; --radius: 0.25; --speed: 9.538495397825216; --delay: -4.662848131208152;">
        </div>
        <svg class="tree__star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 113.32 108.44"
            style="--delay: 50">
            <path
                d="M90.19 104.33L57.12 87.38 24.4 105l5.91-36.69L3.44 42.65l36.72-5.72 16.1-33.5L73.06 36.6l36.83 4.97-26.35 26.21z"
                fill="none" stroke-width="6.88" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </div>        
</div>`;
//#endregion TEMPLATE

//#region CLASS
window.customElements.define('christmas-tree-ɮ', class extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ 'mode': 'open' });
        this._shadowRoot.appendChild(christmas_tree.content.cloneNode(true));

    }

    set content(x) {
        this.$content.innerHTML = x;
    }
});
  //#endregion CLASS
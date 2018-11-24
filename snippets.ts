<iframe [src]='sanitizer.bypassSecurityTrustResourceUrl(woocommerceUrl)' width="100%" height="100%" frameborder="0"
  webkitallowfullscreen mozallowfullscreen allowfullscreen>
</iframe>


//add import sanitizer at top of your ionic code
import { DomSanitizer } from "@angular/platform-browser";

//the rest code for controller

  constructor(
    public navCtrl: NavController,
    public sanitizer: DomSanitizer
  ) {
    this.woocommerceUrl = "https://cdsandwich.umt-mall.com/";
  }

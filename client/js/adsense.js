Adsense = {};

Adsense.addTopBarCode = function() {
  $.getScript("//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", function() {
    var ads, adsbygoogle;
    ads = '<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-0183306563861637" data-ad-slot="6141586821" data-ad-format="auto"></ins>';
    $('.adsense-top-row').html(ads);
    return (adsbygoogle = window.adsbygoogle || []).push({});
  });
}

Adsense.addBottomBarCode = function() {
  $.getScript("//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", function() {
    var ads, adsbygoogle;
    ads = '<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-0183306563861637" data-ad-slot="9095053223" data-ad-format="auto"></ins>';
    $('.adsense-bottom-row').html(ads);
    return (adsbygoogle = window.adsbygoogle || []).push({});
  });
}
/* LF Consultoria — SDR Bridge V1
 * Captures attribution from the landing page and appends it to WhatsApp CTA links.
 * No secrets are stored here. The single V1 WhatsApp remains +55 51 98966-7702.
 */
(function(){
  'use strict';
  var KEY='lf_sdr_attribution_v1';
  var params=new URLSearchParams(window.location.search);
  var keys=['utm_source','utm_medium','utm_campaign','utm_content','utm_term','gclid','fbclid'];
  var data={};
  keys.forEach(function(k){var v=params.get(k);if(v)data[k]=v;});
  if(Object.keys(data).length){data.landing_url=window.location.href;data.landing_ts=new Date().toISOString();try{sessionStorage.setItem(KEY,JSON.stringify(data));}catch(e){}}
  try{var saved=JSON.parse(sessionStorage.getItem(KEY)||'{}');Object.assign(data,saved);}catch(e){}
  function buildText(text){
    var parts=[];
    if(data.utm_source)parts.push('origem='+data.utm_source);
    if(data.utm_medium)parts.push('midia='+data.utm_medium);
    if(data.utm_campaign)parts.push('campanha='+data.utm_campaign);
    if(data.utm_content)parts.push('criativo='+data.utm_content);
    if(data.gclid)parts.push('gclid='+data.gclid);
    if(data.fbclid)parts.push('fbclid='+data.fbclid);
    return parts.length ? text+' ['+parts.join(' | ')+']' : text;
  }
  document.querySelectorAll('a[href*="wa.me/5551989667702"]').forEach(function(a){
    try{
      var u=new URL(a.href);
      var text=u.searchParams.get('text')||'Olá, Luis Paulo. Vim pelo site e quero falar sobre minha empresa.';
      u.searchParams.set('text',buildText(text));
      a.href=u.toString();
    }catch(e){}
  });
  window.LF_SDR_ATTRIBUTION=data;
})();

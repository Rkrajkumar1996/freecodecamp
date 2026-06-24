const manifest={ containerId: 0, destination: 405, weight: -84, unit: "pounds", hazmat: "no" }





function normalizeUnits(manifest){
  const newManifest={...manifest}
  if(newManifest.unit=='lb'){
    newManifest.weight=newManifest.weight*0.45;
    newManifest.unit='kg';
  }
  return newManifest;
}

function validateManifest(manifest){
  let m1={};
  if(manifest.containerId===undefined){
    m1.containerId="Missing";
  }
 else if ((!Number.isInteger(manifest.containerId)) || (manifest.containerId<=0))
  {
  m1.containerId="Invalid";


  }
  if (manifest.destination===undefined){
    m1.destination="Missing";
  }
  else if (typeof manifest.destination !== 'string' || manifest.destination.trim() === ""){
    m1.destination="Invalid"
  }
  

  if(manifest.weight===undefined){
    m1.weight="Missing";
  }
  else if ((typeof(manifest.weight)!=='number')|| Number.isNaN(manifest.weight)||(manifest.weight<=0)){
    m1.weight="Invalid";
  }
  

  if (manifest.unit===undefined){
    m1.unit="Missing";
  }
  else if ((manifest.unit!=='lb')&&(manifest.unit!=='kg')) {
    m1.unit="Invalid";
  }


  if(manifest.hazmat===undefined){
    m1.hazmat="Missing";
  }
  else if(typeof manifest.hazmat !== 'boolean')
  {
    m1.hazmat="Invalid";
  }


return m1;
}

function processManifest(manifest) {
  // 1. முதலில் வேலிடேட் செய்து அந்த எரர் ஆப்ஜெக்ட்டை ஒரு வேரியபிளில் சேமியுங்கள்
  const errors = validateManifest(manifest);

  // 2. எரர் ஆப்ஜெக்ட் காலியாக இருக்கிறதா என்று பாருங்கள் (அதாவது தவறுகள் இல்லை)
  if (Object.keys(errors).length === 0) {
    
    // கன்சோல் 1: சக்சஸ் மெசேஜ் (கவனிக்க: கேள்வியில் உள்ளவாறே எழுத வேண்டும்)
    console.log(`Validation success: ${manifest.containerId}`);
    
    // இப்போது எடையை நார்மலைஸ் செய்ய வேண்டும்
    const normalized = normalizeUnits(manifest);
    
    // கன்சோல் 2: மாற்றப்பட்ட எடையைக் காட்டுங்கள்
    console.log(`Total weight: ${normalized.weight} kg`);

  } else {
    // 3. ஒருவேளை தவறுகள் இருந்தால் (ஆப்ஜெக்ட் காலியாக இல்லை என்றால்)
    
    // கன்சோல் 1: எரர் மெசேஜ்
    console.log(`Validation error: ${manifest.containerId}`);
    
    // கன்சோல் 2: அந்த எரர் ஆப்ஜெக்ட்டை அப்படியே பிரிண்ட் செய்ய வேண்டும்
    console.log(errors);
  }
}

console.log(validateManifest(manifest));


$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
      console.log(data);
    }
  });


  api.age      = random.numeric(1, 25);
api.dogYears = api.age * 7;

//result
{"results":[{"age":20,"dogYears":140}]}

// ****************************
// This is a comment that isn't evaluated
/*
  Multiline comments work as well!
*/
const fullName = "Billy Builder"; // Not attached to api object
var middleName = "The";
let age   = 5;
api.age   = age; // Attached to api object
api.phone = phoneNum(); // Calling user defined function

function phoneNum(format) {
  format = format || "(xxx) xxx-xxxx";
  return String(format).split('').map(digit => {
    return digit === 'x' ? random.numeric(0, 9) : digit;
  }).join('');
}

// Result
{
    "results": [
      {
        "age": 5,
        "phone": "(336) 580-1131"
      }
    ]
  }
  // ******************** numeric
  random.numeric(25, 85);    // 31
random.numeric('adsf', 2); // TypeError: Non numeric arguments provided
random.numeric(3, 2);      // RangeError: min is greater than max

// ********** special mode.length
// Available predefined charsets
// 1: abcdef1234567890
// 2: ABCDEF1234567890
// 3: abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890
// 4: 0123456789
// 5: abcdefghijklmnopqrstuvwxyz
// 6: ABCDEFGHIJKLMNOPQRSTUVWXYZ
// 7: abcdefghijklmnopqrstuvwxyz1234567890
// 8: ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890

random.special(1, 10); // 616283c380
random.special(2, 10); // 18550F0761
random.special(3, 10); // oyE8seFUJW
random.special(4, 10); // 3064867594
random.special(5, 10); // pvdsmelnei
random.special(6, 10); // YIHHSSVRXR
random.special(7, 10); // auws4syf9k
random.special(8, 10); // SEFXPCCBIP

// **************** custom	charset, length
random.custom("1111111112", 10); // 1112111111
random.custom("aBcáΩßDefG1290é\"", 10); // G"BcGé02D1
random.custom("œ∑´®†¥¨ˆøπåß∂ƒ©˙∆˚¬Ω≈ç√∫˜µ", 10); // ®®ø˚øƒ˚†Ωç  

// ************* hash Generate a hash from a string.

// md5	str
// 82961fecf4f7ee8d8a10390072332efd
hash.md5('mysoupersekurepasswurd!');


// sha1	str
// 7babf75100bbe01ad3e0795831463dd9fd0ed517
hash.sha1('mysoupersekurepasswurd!');

//sha256	str
// a6360b34e354384e75de6241ba4fa3a33c6ef799c8943a04d000f19cb6af1051
hash.sha256('mysoupersekurepasswurd!');

// ***************** timestamp

// API Code
api.max = Number(getVar("max")) || 10;
api.num = random.numeric(0, api.max);

//Result
// https://randomapi.com//api/123456?max=25
{"results":[{"max": 100,"num": 21}]}

// https://randomapi.com//api/123456
{"results":[{"max": 10,"num": 4}]}


// API Code
api.seed    = getVar('seed');
api.numSeed = getVar('numericSeed');
api.format  = getVar('fmt');
api.key     = getVar('key');
api.ref     = getVar('ref');

//Result
{
    "results": [
      {
        "seed": "7583c1fdce1943f4",
        "numericSeed": 4200665598,
        "format": "pretty",
        "key": "ABCD-1234-EFGH-5678",
        "ref": "1234abcd"
      }
    ]
  }


// APIs can be called in three different ways:

https://randomapi.com/api/1234abcd?key=ABCD-1234-EFGH-5678      // Ref value is implied
https://randomapi.com/api/?key=ABCD-1234-EFGH-5678&ref=1234abcd // Ref value is explicitly stated
https://randomapi.com/api/1234567890abcdef1234567890abcdef      // Public hash

/*
You can add extra parameters to your API call to transform your data into different formats, specify how many results you'd like to generate, specify a seed, and even communicate with your api through the getVar function

Parameter	Default value	Example value	Description
key	null	ABCD-1234-EFGH-5678	(required) Your API Key
ref	null	1234abcd	(required) The Ref ID of the API that you want to access
fmt	json	json, pretty/prettyjson, csv, xml, yaml, raw, prettyraw

*/
https://randomapi.com/api/1234abcd?key=ABCD-1234-EFGH-5678&results=25&seed=huskiesarecute&page=3
https://randomapi.com/api/?key=ABCD-1234-EFGH-5678&ref=1234abcd&callback=fetchData
https://randomapi.com/api/?key=ABCD-1234-EFGH-5678&ref=1234abcd&fmt=xml&dl
https://randomapi.com/api/?key=ABCD-1234-EFGH-5678&ref=1234abcd&fmt=pretty&noinfo

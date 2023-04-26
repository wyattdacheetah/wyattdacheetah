const id = ( a ) => document.getElementById( a );
const wait = ( millis ) => new Promise( (a,b) => setTimeout( a, millis ) );
const locS = ( name, ltt = true, valodflt = ""  ) => {
    if ( !ltt )
        return localStorage.setItem( name, valodflt );
    let a = localStorage.getItem( name );
    return a ? a : valodflt;
};
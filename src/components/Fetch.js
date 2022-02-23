import React,{useEffect,useState} from 'react'
import Fetchlist from './Fetchlist';
import Process from './Process';

export default function Fetch() {
    const [list, setlist] = useState([]);
    const [boo, setboo] = useState(true);
    const getdata = async () => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/photos');
            const data = await res.json();
            setlist(data);
            setboo(false);

        }
        catch (err) {
            setboo(false);
            console.log(err);
        }
    }

    useEffect(() => {
        getdata();
        
    }, []);
   

    return (
      
        
        <div className="container">
            {
                boo ? <Process /> :
                    <div className="row">
                        <Fetchlist value={list} />
                    </div>}
    </div>
  )
}

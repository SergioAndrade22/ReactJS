import React from 'react';
import Person from '../Person/Person';

const People = ({people, clicked, changed}) => (
    <div>
        {
            people.map((p, index) => 
              <Person click={() => clicked(index)} 
                      onChange={(event) => changed(event, p.id)}
                      key={p.id} 
                      name={p.name} 
                      age={p.age}/>
            )
        }
    </div>
);

export default People;
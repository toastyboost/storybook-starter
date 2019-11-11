import * as React from 'react'
import { dogs, cats } from 'src/libs'

export const Mapping = () => {
  return (
    <>
      {dogs.map(({ dogName, dogText }, dogKey) => (
        <React.Fragment key={dogKey}>
          <div>{dogName}</div>
          <div>
            {dogText}
            <div>
              {cats.map(({ catName, catText }, catKey) => (
                <React.Fragment key={catKey}>
                  <div>{catName}</div>
                  <div>{catText}</div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </React.Fragment>
      ))}
    </>
  )
}

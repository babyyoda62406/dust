 

export const drawStars = (stars: number) => { 
  const n: number = stars / 2
  let a: number[] = []

 
  for (let i = 1; i < 6; i++) {
    if (i <= n) {
      a.push(1) 
    }
    else {
      a.push(0) 
    }
  }
  return (
    <div className="d-flex">
      { a.map((i) => {
        if (i == 1) { 
          return (<span className="bi bi-star-fill text-warning"></span>)
        }
        else { 
          return (<span className="bi bi-star text-warning"></span>)
        }
      }) }
    </div>
  )
}
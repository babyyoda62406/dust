 

export const drawStars = (stars: number) => {

    return (
      <div className="d-flex">
        <span className="bi bi-star-fill text-warning"></span>
        <p className='text-muted mt-1 ms-2'>({ stars })</p>
      </div>
    )
}
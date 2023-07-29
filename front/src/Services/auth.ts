export const login = async (name: string, pasw: string) => {
    const response: Response = await fetch(`http://localhost:8080/api/user`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
    return await response.json();
}

const LoginPage = () => {
    const debugHandle = async () => {
        // @ts-ignore
        const response = await fetch(process.env.REACT_APP_PRICING_API_URL + '/login_check', {
            method: 'post',
            body: JSON.stringify({username: 'john@doe.com', password: '123456'}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.ok) {
            const data = await response.json();
            console.warn(data);
        }
    }
    return(
        <div>
            Login page
            <button type="button" onClick={debugHandle}>Debug</button>
        </div>
    )
}

export default LoginPage;

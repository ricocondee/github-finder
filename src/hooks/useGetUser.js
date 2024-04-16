const useGetUser = async (user) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/${user}`, {
            headers: {
                Authorization: `Bearer ${import.meta.env.API_TOKEN}`
            }
        });
        return await response.json();
    } catch (error) {
        throw new Error(error);
    }
}

export default useGetUser
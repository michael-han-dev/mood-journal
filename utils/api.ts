const createURL = (path) => {
    return window.location.origin + path;
}

export const updateEntry = async (id, content) => {
    const res = await fetch(new Request(createURL(`/api/journal/${id}`), {
        method: 'PATCH',
        body: JSON.stringify({content}),
    }))
    if (res.ok) {
        const data = await res.json()
        return data.data
    } 
    //... when error
    //return {error: true, code: 1234, messageforUI: 'Error message'}
}

export const createNewEntry = async () => {
    try {
        const response = await fetch('/api/journal', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to create new entry');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error creating new entry:', error);
        throw error;
    }
};


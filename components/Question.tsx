'use client'
import { askQuestion } from '@/utils/api';
import { useState } from 'react';


const Question = () => {
    const [value, setValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState<string | null>(null);
    const onChange =(e) => {
        setValue(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const answer = await askQuestion(value);
            setResponse(answer);  // Assuming answer is a string, if it's an object, update this accordingly.
        } catch (error) {
            console.error("Error asking question:", error);
            setResponse("An error occurred while fetching the answer.");
        }
        setValue('');
        setLoading(false);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                disabled={loading}
                onChange={onChange}
                value={value} 
                type="text" 
                placeholder="Enter your question here" 
                className='border border-black/20 px-4 py-2 text-lg rounded-lg' 
                />
                <button 
                disabled={loading} 
                type="submit" 
                className='bg-blue-400 px-4 py-2 rounded-lg text-lg'
                >Ask</button>
            </form>
            {loading && <div>Loading...</div>}
            {response && <div className="mt-4 p-4 border bg-gray-100">{response}</div>}
        </div>
    )
}

export default Question;
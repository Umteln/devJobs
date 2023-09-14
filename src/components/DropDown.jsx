import { JobsAuth } from '../context/JobsContext';
import { states } from '../utils/stateList';

const DropDown = () => {
    const { jobLocation, setJobLocation } = JobsAuth();

    return (
        <div className='flex flex-col md:flex-row items-center gap-10 justify-center'>
            <div className='singleSearch flex  items-center gap-2'>
                <label
                    htmlFor='type'
                    className='text-[#808080] font-semibold'
                >
                    Location:
                </label>

                <select
                    className='bg-white rounded-[3px] px-4 py-1 cursor-pointer'
                    value={jobLocation}
                    onChange={(e) => {
                        setJobLocation(e.target.value);
                    }}
                >
                    <option value='ALL'> ALL </option>
                    <option value='REMOTE'> Remote </option>
                    {states.sort().map((state) => (
                        <option
                            key={state.abbreviation}
                            value={state.abbreviation}
                        >
                            {state.name}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default DropDown;

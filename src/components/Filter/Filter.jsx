import React from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import styles from './Filter.module.css';

const Filter = () => {
    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(changeFilter(e.target.value));
    };

    return (
        <div className={styles.filter}>
            <label>
                Find contacts by name
                <input type="text" onChange={handleChange} />
            </label>
        </div>
    );
};

export default Filter;

import React, { useState } from 'react';

const FilterComponent = ({ onFilter }) => {
    const [filters, setFilters] = useState({
        priceRange: '',
        vehicleType: '',
        fuelType: '',
        transmission: ''
    });

    const handleChange = (e) => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="filter-container">
            <select name="priceRange" onChange={handleChange}>
                <option value="">Select Price Range</option>
                <option value="0-100">0-100</option>
                <option value="100-200">100-200</option>
            </select>
            <select name="vehicleType" onChange={handleChange}>
                <option value="">Select Vehicle Type</option>
                <option value="SUV">SUV</option>
                <option value="Sedan">Sedan</option>
            </select>
            <button onClick={() => onFilter(filters)}>Apply Filters</button>
        </div>
    );
};

export default FilterComponent;

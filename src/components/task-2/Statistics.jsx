import React from "react";
// import PropTypes from 'prop-types'
import StatList from "./StatList";
import "../task-2/statisticsModule.css"


const Statistics = ({ title, stats }) => {
    return <section className="statistics">
        <h2 className="title">{title}</h2>
        <StatList data={stats} />
    </section>
}

export default Statistics;

// Statistics.PropTypes = {
//     title: PropTypes.string,
//     // stats: PropTypes.array
// };
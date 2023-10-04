import styles from "./ResultsSummary.module.css";

function ResultsSummary({numberOfResults}) {
    return <div className={styles.summary}>
        <h1>
            Flights
        </h1>
        <span>{numberOfResults} results</span>
    </div>;
}

export default ResultsSummary;
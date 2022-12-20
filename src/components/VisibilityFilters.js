import React from "react";
import cx from "classnames";
import { connect } from "react-redux";
import { setFilter } from "../redux/action/action";
import { VISIBILITY_FILTERS } from "../redux/constants/constants";

const VisibilityFilters = ({ activeFilter, setFilter }) => {
    return (
        <div className="visibility-filters">
            {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
                const currentFilter = VISIBILITY_FILTERS[filterKey];
                return (
                    <span
                        key={`visibility-filter-${currentFilter}`}
                        className={cx(
                            "text-info px-2",
                            currentFilter === activeFilter && "border-bottom border-info"
                        )}
                        onClick={() => {
                            setFilter(currentFilter);
                        }}
                    >
                        {currentFilter}
                    </span>
                );
            })}
        </div>
    );
};

const mapStateToProps = state => {
    return { activeFilter: state.visibilityFilter };
};
// export default VisibilityFilters;
export default connect(
    mapStateToProps,
    { setFilter }
)(VisibilityFilters);

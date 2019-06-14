import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
import RCPagination from 'rc-pagination';
import en_GB from 'rc-pagination/lib/locale/en_GB';
// import Select from '../Select';
import RCSelect from 'rc-select';

const Pagination = props => {
    return <RCPagination {...props} prefixCls="bb-pagination" selectPrefixCls="bb-select" />;
};

Pagination.propTypes = {
    /** disable pagination */
    disabled: PropTypes.bool,
    /** uncontrolled current page */
    defaultCurrent: PropTypes.number,
    /** current page	 */
    current: PropTypes.number,
    /** items total count */
    total: PropTypes.number,
    /** default items per page */
    defaultPageSize: PropTypes.number,
    /** items per page */
    pageSize: PropTypes.number,
    /** page change callback */
    onChange: PropTypes.func,
    /** show pageSize changer */
    showSizeChanger: PropTypes.bool,
    /** specify the sizeChanger selections */
    pageSizeOptions: PropTypes.arrayOf(PropTypes.string),
    /** pageSize change callback */
    onShowSizeChange: PropTypes.func,
    /** hideOnSinglePage */
    hideOnSinglePage: PropTypes.bool,
    /** show jump-prev, jump-next */
    showPrevNextJumpers: PropTypes.bool,
    /** show quick goto jumper */
    showQuickJumper: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    /**
     * show total records and range <br/>
     * Func(total: number, range: [from:number, to:number]) => React.ReactNode;
     * */
    showTotal: PropTypes.func,
    /** className of pagination */
    className: PropTypes.string,
    /** when set, show simple pager */
    simple: PropTypes.object,
    /** to set l10n config */
    locale: PropTypes.object,
    /** the style of pagination */
    style: PropTypes.object,
    /** show less page items */
    showLessItems: PropTypes.bool,
    /** show page items title */
    showTitle: PropTypes.bool,
    /**
     * custom page item renderer <br/>
     * Func(page: number, type: string? 'page' | 'prev' | 'next', element: React.ReactNode) => React.ReactNode;
     * */
    itemRender: PropTypes.func,
    /**
     * custom select page size
     */
    selectComponentClass: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    /**
     * specifict the default previous icon <br/>
     * Func(props: PaginationProps) => ReactNode;
     */
    prevIcon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    /**
     * specifict the default next icon <br/>
     * Func(props: PaginationProps) => ReactNode;
     */
    nextIcon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    /**
     * specifict the default jump previous icon <br/>
     * Func(props: PaginationProps) => ReactNode;
     */
    jumpPrevIcon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
    /**
     * specifict the default jump next icon <br/>
     * Func(props: PaginationProps) => ReactNode;
     */
    jumpNextIcon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
};

Pagination.defaultProps = {
    disabled: false,
    defaultCurrent: 1,
    current: undefined,
    total: 0,
    defaultPageSize: 10,
    pageSize: 10,
    showSizeChanger: false,
    pageSizeOptions: ['5', '10'],
    hideOnSinglePage: false,
    showPrevNextJumpers: true,
    showQuickJumper: false,
    simple: null,
    locale: en_GB,
    style: {},
    showLessItems: false,
    showTitle: true,
    selectComponentClass: RCSelect,
};

export default Pagination;

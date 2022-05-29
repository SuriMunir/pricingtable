import React from 'react';

export default function PriceCard(props) {
  let classNamePublicProjects = `fas ${
    props.unlimitedPublicProjects ? 'fa-check' : 'fa-times'
  }`;
  let classNameLiPublicProjects = `${
    props.unlimitedPublicProjects ? '' : 'text-muted'
  }`;
  let classNamePrivateProjects = `fas ${
    props.unlimitedPrivateProjects ? 'fa-check' : 'fa-times'
  }`;
  let classNameLiPrivateProjects = `${
    props.unlimitedPrivateProjects ? '' : 'text-muted'
  }`;
  let classNameCommunityAccess = `fas ${
    props.communityAccess ? 'fa-check' : 'fa-times'
  }`;
  let classNameLiCommunityAccess = `${
    props.communityAccess ? '' : 'text-muted'
  }`;
  let classNamePhoneSupport = `fas ${
    props.phoneSupport ? 'fa-check' : 'fa-times'
  }`;
  let classNameLiPhoneSupport = `${props.phoneSupport ? '' : 'text-muted'}`;
  let classNameSubDomain = `fas ${props.subDomain ? 'fa-check' : 'fa-times'}`;
  let classNameLiSubDomain = `${props.subDomain ? '' : 'text-muted'}`;
  let classNameMonthlyStatusReport = `fas ${
    props.monthlyStatusReport ? 'fa-check' : 'fa-times'
  }`;
  let classNameLiMonthlyStatusReport = `${
    props.monthlyStatusReport ? '' : 'text-muted'
  }`;
  return (
    <div className='card mb-5 mb-lg-0'>
      <div className='card-body'>
        <h5 className='card-title text-muted text-uppercase text-center'>
          {props.title}
        </h5>
        <h6 className='card-price text-center'>
          ${props.price}
          <span className='period'>/month</span>
        </h6>
        <hr />
        <ul className='fa-ul'>
          <li>
            <span className='fa-li'>
              <i className='fas fa-check'></i>
            </span>
            {props.users} User
          </li>
          <li>
            <span className='fa-li'>
              <i className='fas fa-check'></i>
            </span>
            {props.storage} Storage
          </li>
          <li className={classNameLiPublicProjects}>
            <span className='fa-li'>
              <i className={classNamePublicProjects}></i>
            </span>
            Unlimited Public Projects
          </li>
          <li className={classNameLiCommunityAccess}>
            <span className='fa-li'>
              <i className={classNameCommunityAccess}></i>
            </span>
            Community Access
          </li>
          <li className={classNameLiPrivateProjects}>
            <span className='fa-li'>
              <i className={classNamePrivateProjects}></i>
            </span>
            Unlimited Private Projects
          </li>
          <li className={classNameLiPhoneSupport}>
            <span className='fa-li'>
              <i className={classNamePhoneSupport}></i>
            </span>
            Dedicated Phone Support
          </li>
          <li className={classNameLiSubDomain}>
            <span className='fa-li'>
              <i className={classNameSubDomain}></i>
            </span>
            Free Subdomain
          </li>
          <li className={classNameLiMonthlyStatusReport}>
            <span className='fa-li'>
              <i className={classNameMonthlyStatusReport}></i>
            </span>
            Monthly Status Reports
          </li>
        </ul>
        <div className='d-grid'>
          <a href='#' className='btn btn-primary btn-block text-uppercase'>
            Button
          </a>
        </div>
      </div>
    </div>
  );
}

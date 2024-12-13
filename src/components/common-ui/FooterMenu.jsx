import React from 'react';
import { footerMenuData } from '../../data/footerData';
const FooterMenu = () => {
  return (
    <div>

      <div className="grid grid-cols-1 text-start sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {footerMenuData.map((section, index) => (
          <div key={index}>
            <h3 className="font-semibold text-lg mb-4 text-secondary">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((link, idx) => (
                <li key={idx}>
                  {link.icon ? (
                    <a
                      href={link.href}
                      aria-label={link.label}
                      className="hover:underline inline-flex items-center"
                    >
                      <i className={link.icon}></i>
                    </a>
                  ) : (
                    <a href={link.href} className="text-gray-500 text-md hover:text-primary">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}


      </div>
      <div class="mt-8 text-center  text-gray-500 text-lg border-gray-700 pt-4">
        <p>&copy; 2024 Ntechzy Pvt Ltd. All rights reserved.</p>
      </div>
    </div>
  );
};

export default FooterMenu;
import {
  MetaPropertyCharset,
  MetaPropertyEquiv,
  MetaPropertyName,
  MetaPropertyMicrodata,
  MetaPropertyProperty,
} from 'vue-meta'

export const meta: (
  | MetaPropertyCharset
  | MetaPropertyEquiv
  | MetaPropertyName
  | MetaPropertyMicrodata
  | MetaPropertyProperty
)[] = [
  {
    hid: 'title',
    name: 'title',
    content: 'Filippo Bovo | Privacy policy',
  },
  {
    hid: 'og:title',
    name: 'og:title',
    content: 'Filippo Bovo | Privacy policy',
  },
  {
    hid: 'description',
    name: 'description',
    content: 'Privacy and cookie policy, GDPR compliant',
  },
  {
    hid: 'og:description',
    name: 'og:description',
    content: 'Privacy and cookie policy, GDPR compliant',
  },
  {
    hid: 'keywords',
    name: 'keywords',
    content: 'privacy policy,cookie policy,ccpa,gdpr,caloppa,coppa',
  },
  {
    hid: 'robots',
    name: 'robots',
    content: 'noindex',
  },
]

export const content: StaticContentData.INode[] = [
  {
    type: 'element',
    tagName: 'div',
    attributes: [
      {
        key: 'class',
        value: 'a-content',
      },
    ],
    children: [
      {
        type: 'element',
        tagName: 'h1',
        attributes: [],
        children: [
          {
            type: 'text',
            content: 'FilippoBovo.com Privacy Policy',
          },
        ],
      },
      {
        type: 'element',
        tagName: 'p',
        attributes: [],
        children: [
          {
            type: 'text',
            content:
              'Your privacy is important to me. It is my policy to respect your privacy regarding any information I may collect from you across my website: FilippoBovo.com (from now on “F/B website”).',
          },
        ],
      },
      {
        type: 'element',
        tagName: 'h2',
        attributes: [],
        children: [
          {
            type: 'text',
            content: 'Information I collect',
          },
        ],
      },
      {
        type: 'element',
        tagName: 'p',
        attributes: [],
        children: [
          {
            type: 'element',
            tagName: 'b',
            attributes: [],
            children: [
              {
                type: 'text',
                content: 'When you visit F/B website',
              },
            ],
          },
          {
            type: 'text',
            content:
              ': the server automatically collect your usage data. Usage data may include information such as your computer’s Internet Protocol (IP) address, your browser type and version, the pages you visit, the time and date of your visit, the time spent on each page, and other standard data provided by your web browser.',
          },
        ],
      },
      {
        type: 'element',
        tagName: 'p',
        attributes: [],
        children: [
          {
            type: 'element',
            tagName: 'b',
            attributes: [],
            children: [
              {
                type: 'text',
                content: 'When you use the contact form',
              },
            ],
          },
          {
            type: 'text',
            content:
              ': I ask for your name, e-mail address, and whether you agree to my policies. This information is mandatory, as I use it to get in touch with you. I will never publish your email address and I keep our conversations strictly confidential.',
          },
        ],
      },
      {
        type: 'element',
        tagName: 'h2',
        attributes: [],
        children: [
          {
            type: 'text',
            content: 'My legal bases for processing',
          },
        ],
      },
      {
        type: 'element',
        tagName: 'p',
        attributes: [],
        children: [
          {
            type: 'text',
            content:
              'I process information lawfully, fairly and transparently. I only collect and process information about you only where:',
          },
        ],
      },
      {
        type: 'element',
        tagName: 'ul',
        attributes: [],
        children: [
          {
            type: 'element',
            tagName: 'li',
            attributes: [],
            children: [
              {
                type: 'text',
                content:
                  'you give me consent to do so for a specific purpose (eg. entering your email address so I can contact you);',
              },
            ],
          },
          {
            type: 'element',
            tagName: 'li',
            attributes: [],
            children: [
              {
                type: 'text',
                content:
                  'I need to process your data to comply with a legal obligation;',
              },
            ],
          },
          {
            type: 'element',
            tagName: 'li',
            attributes: [],
            children: [
              {
                type: 'text',
                content:
                  'it satisfies a legitimate interest, such as for research and development and to protect my legal rights and interests.',
              },
            ],
          },
        ],
      },
      {
        type: 'element',
        tagName: 'p',
        attributes: [],
        children: [
          {
            type: 'text',
            content:
              'When you consent to use of information about you for a specific purpose, you have the right to change your mind at any time, but this won’t affect any processing I’ve already done.',
          },
        ],
      },
      {
        type: 'element',
        tagName: 'p',
        attributes: [],
        children: [
          {
            type: 'text',
            content:
              'While I retain this information, I’ll protect it within commercially acceptable means to prevent loss and theft, as well as unauthorised access, disclosure, copying, use or modification. That said, I advise that no method of electronic transmission or storage is 100% secure and cannot guarantee absolute data security.',
          },
        ],
      },
      {
        type: 'element',
        tagName: 'h2',
        attributes: [],
        children: [
          {
            type: 'text',
            content: 'Collecting and using information',
          },
        ],
      },
      {
        type: 'element',
        tagName: 'p',
        attributes: [],
        children: [
          {
            type: 'text',
            content:
              'I collect, hold, use and disclose information for the following purposes:',
          },
        ],
      },
      {
        type: 'element',
        tagName: 'ul',
        attributes: [],
        children: [
          {
            type: 'element',
            tagName: 'li',
            attributes: [],
            children: [
              {
                type: 'text',
                content:
                  'to enable you to access and use F/B website, associated applications and associated social media platforms;',
              },
            ],
          },
          {
            type: 'element',
            tagName: 'li',
            attributes: [],
            children: [
              {
                type: 'text',
                content:
                  'to contact and communicate with you about email enquiries;',
              },
            ],
          },
          {
            type: 'element',
            tagName: 'li',
            attributes: [],
            children: [
              {
                type: 'text',
                content: 'for internal record keeping;',
              },
            ],
          },
          {
            type: 'element',
            tagName: 'li',
            attributes: [],
            children: [
              {
                type: 'text',
                content:
                  'for analytics, market research and business development, including to operate and improve F/B website, associated applications and associated social media platforms;',
              },
            ],
          },
          {
            type: 'element',
            tagName: 'li',
            attributes: [],
            children: [
              {
                type: 'text',
                content:
                  'to comply with legal obligations and resolve any disputes that I may have.',
              },
            ],
          },
        ],
      },
      {
        type: 'element',
        tagName: 'h2',
        attributes: [],
        children: [
          {
            type: 'text',
            content: 'Disclosure of personal information to third parties',
          },
        ],
      },
      {
        type: 'element',
        tagName: 'p',
        attributes: [],
        children: [
          {
            type: 'text',
            content:
              'FilippoBovo.com is supported by third-party providers to facilitate the provision of a transactional website. These include DNS management, web hosting and analytics.',
          },
        ],
      },
      {
        type: 'element',
        tagName: 'p',
        attributes: [],
        children: [
          {
            type: 'text',
            content:
              'I will comply with government and law enforcement requests for data, as required by law, in connection with any actual or prospective legal proceedings, or in order to establish, exercise or defend my legal rights.',
          },
        ],
      },
      {
        type: 'element',
        tagName: 'p',
        attributes: [],
        children: [
          {
            type: 'element',
            tagName: 'u',
            attributes: [],
            children: [
              {
                type: 'text',
                content: 'I do not sell or rent your personal information',
              },
            ],
          },
          {
            type: 'text',
            content: ' to marketers or third parties.',
          },
        ],
      },
      {
        type: 'element',
        tagName: 'h2',
        attributes: [],
        children: [
          {
            type: 'text',
            content: 'International transfers of personal information',
          },
        ],
      },
      {
        type: 'element',
        tagName: 'p',
        attributes: [],
        children: [
          {
            type: 'text',
            content:
              'The data I retain is stored and processed in Italy (Europe), and/or where I and my third-party providers maintain facilities. By providing me with your personal information, you consent to the disclosure to these overseas third parties.',
          },
        ],
      },
      {
        type: 'element',
        tagName: 'h2',
        attributes: [],
        children: [
          {
            type: 'text',
            content: 'Your rights as user',
          },
        ],
      },
      {
        type: 'element',
        tagName: 'p',
        attributes: [],
        children: [
          {
            type: 'element',
            tagName: 'b',
            attributes: [],
            children: [
              {
                type: 'text',
                content: 'Choice and consent',
              },
            ],
          },
          {
            type: 'text',
            content:
              ': by providing your information to me, you consent to me collecting, holding, using and disclosing it in accordance with this privacy policy. You are free to refuse my request for information, with the understanding that I may be unable to provide you with generated Terms of Service and Privacy Policy statements without it. If you’re under 13 years of age, you must supply evidence of your parent or legal guardian’s knowledge and permission of you providing me with information.',
          },
        ],
      },
      {
        type: 'element',
        tagName: 'p',
        attributes: [],
        children: [
          {
            type: 'element',
            tagName: 'b',
            attributes: [],
            children: [
              {
                type: 'text',
                content: 'Information from third parties',
              },
            ],
          },
          {
            type: 'text',
            content:
              ': if I receive information about you from a third party, I’ll protect it as set out in this privacy policy. If you are a third party providing information about somebody else (eg. an agency operating on behalf of a client), you represent and warrant that you have that person’s consent to provide their information to me.',
          },
        ],
      },
      {
        type: 'element',
        tagName: 'p',
        attributes: [],
        children: [
          {
            type: 'element',
            tagName: 'b',
            attributes: [],
            children: [
              {
                type: 'text',
                content: 'Restrict',
              },
            ],
          },
          {
            type: 'text',
            content:
              ': you may choose to restrict the collection or use of your personal information by contacting me using the details on this website. If you ask me to restrict or limit how I process your personal information, I will let you know how the restriction affects your use of F/B website or products and services.',
          },
        ],
      },
      {
        type: 'element',
        tagName: 'p',
        attributes: [],
        children: [
          {
            type: 'element',
            tagName: 'b',
            attributes: [],
            children: [
              {
                type: 'text',
                content: 'Access and data portability',
              },
            ],
          },
          {
            type: 'text',
            content:
              ': you may request details of the personal information that I hold about you. You may request a copy of the personal information I hold about you. You may request to erase the personal information I hold about you at any time.',
          },
        ],
      },
      {
        type: 'element',
        tagName: 'p',
        attributes: [],
        children: [
          {
            type: 'element',
            tagName: 'b',
            attributes: [],
            children: [
              {
                type: 'text',
                content: 'Correction',
              },
            ],
          },
          {
            type: 'text',
            content:
              ': if you believe that any information I hold about you is inaccurate, out of date, incomplete, irrelevant or misleading, please contact me using the details below, and I will take reasonable steps to rectify the issue.',
          },
        ],
      },
      {
        type: 'element',
        tagName: 'p',
        attributes: [],
        children: [
          {
            type: 'element',
            tagName: 'b',
            attributes: [],
            children: [
              {
                type: 'text',
                content: 'Notification of data breaches',
              },
            ],
          },
          {
            type: 'text',
            content:
              ': I will comply with laws applicable to me in respect of any data breach.',
          },
        ],
      },
      {
        type: 'element',
        tagName: 'p',
        attributes: [],
        children: [
          {
            type: 'element',
            tagName: 'b',
            attributes: [],
            children: [
              {
                type: 'text',
                content: 'Complaints',
              },
            ],
          },
          {
            type: 'text',
            content:
              ': if you believe that I have breached a relevant data protection law and wish to make a complaint, please contact me using the details below and provide me with full details of the alleged breach. I will promptly investigate your complaint and respond to you, in writing, setting out the outcome of my investigation and the steps I will take to deal with your complaint. You also have the right to contact a regulatory body or data protection authority in relation to your complaint.',
          },
        ],
      },
      {
        type: 'element',
        tagName: 'h2',
        attributes: [],
        children: [
          {
            type: 'text',
            content: 'Cookies',
          },
        ],
      },
      {
        type: 'element',
        tagName: 'p',
        attributes: [],
        children: [
          {
            type: 'text',
            content:
              'A cookie is a small piece of data that a website stores on your computer, and accesses each time you visit, so it can perform certain functions and understand how you use my site. I use first-party and third-party cookies, for the purposes set out below:',
          },
        ],
      },
      {
        type: 'element',
        tagName: 'ul',
        attributes: [],
        children: [
          {
            type: 'element',
            tagName: 'li',
            attributes: [],
            children: [
              {
                type: 'element',
                tagName: 'b',
                attributes: [],
                children: [
                  {
                    type: 'text',
                    content: 'Essential cookies',
                  },
                ],
              },
              {
                type: 'text',
                content:
                  ', also known as necessary or technical cookies (session cookies): these cookies are essential to use some of the features available through F/B website.',
              },
            ],
          },
        ],
      },
      {
        type: 'element',
        tagName: 'h2',
        attributes: [],
        children: [
          {
            type: 'text',
            content: 'About this policy',
          },
        ],
      },
      {
        type: 'element',
        tagName: 'p',
        attributes: [],
        children: [
          {
            type: 'text',
            content:
              "This privacy policy only covers FilippoBovo.com's own collecting and handling of data. I only work with partners and third-party providers whose privacy policies align with mine, however I cannot accept responsibility or liability for their respective privacy practices.",
          },
        ],
      },
      {
        type: 'element',
        tagName: 'p',
        attributes: [],
        children: [
          {
            type: 'text',
            content:
              'F/B website may link to external sites that are not operated by me. Please be aware that I have no control over the content and policies of those sites, and cannot accept responsibility or liability for their content and their respective privacy practices as well.',
          },
        ],
      },
      {
        type: 'element',
        tagName: 'p',
        attributes: [],
        children: [
          {
            type: 'text',
            content:
              'At my discretion, I may update this policy to reflect current acceptable practices. I will take reasonable steps to let users know about significant changes via F/B website. Your continued use of this site after any changes to this policy will be regarded as acceptance of my practices around data and personal information.',
          },
        ],
      },
      {
        type: 'element',
        tagName: 'p',
        attributes: [],
        children: [
          {
            type: 'text',
            content:
              'If you have any concerns or questions about how I handle your data and personal information, feel free to contact me.',
          },
        ],
      },
      {
        type: 'element',
        tagName: 'p',
        attributes: [],
        children: [
          {
            type: 'text',
            content: 'This policy is effective as of 12 June 2019.',
          },
        ],
      },
    ],
  },
]

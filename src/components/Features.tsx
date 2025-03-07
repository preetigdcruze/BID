import React, { useState } from 'react';
import '../css/styles.css';

const Features: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleContent = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const features = [
        {
            title: 'Google Ads Optimization',
            content: 'Our primary goal is to refine your campaigns to boost performance and maximize ROI. Our strategies include targeting the right keywords, locations, and audiences, creating compelling ad copy with strong CPAs, and ensuring landing pages are relevant and fast-loading. Leveraging automated bidding strategies like Target CPA and regularly monitoring performance data helps improve ad efficiency. Additionally, optimizing Quality Score, using ad extensions, and employing remarketing techniques can drive better results. Regular adjustments based on data are crucial for sustained success.'
        },
        {
            title: 'Google Analytics Optimization',
            content: 'We refine your tracking setup to gain more accurate insights and improve decision-making. Key steps include setting up goals and conversion tracking, organizing your account with clear views and filters, and ensuring your website tags are correctly implemented. Regularly reviewing data, segmenting traffic, and analyzing user behavior helps identify areas for improvement. By optimizing reports and dashboards, you can focus on key metrics, adjust strategies, and enhance user experiences for better business outcomes.'
        },
        {
            title: 'SEM',
            content: 'Search Engine Marketing (SEM) involves promoting a website through paid advertising on search engines like Google. It typically includes strategies like paid search ads, display ads, and remarketing to drive traffic and increase visibility. SEM focuses on targeting specific keywords, creating compelling ads, and optimizing campaigns for better return on investment. With a combination of keyword research, bidding strategies, and continuous performance tracking, SEM helps businesses reach potential customers at the right moment and convert them into leads or sales.'
        },
        {
            title: 'Cost Management',
            content: 'We efficiently allocate and control the budget to maximize return on investment (ROI). It includes tracking ad spend across channels like Google Ads, social media, and display networks, while optimizing campaigns to reduce costs per click or conversion. We monitor performance metrics, adjusting bids, and targeting the right audience, businesses can ensure their marketing budget is spent wisely. This prevents overspending and ensures that each dollar spent contributes to achieving business goals.'
        },
        {
            title: 'Bid Management',
            content: 'We adjust and optimize bids for paid advertising campaigns to achieve the best results at the lowest cost. This includes setting bids for keywords, targeting options, and ad placements across platforms like Google Ads and social media. By using automated bidding strategies like Target CPA or manual bidding, marketers can control their ad spend while maximizing visibility and conversions. This ensures campaigns remain cost-effective and competitive in the auction.'
        },
        {
            title: 'ROI Generation',
            content: 'ROI generation focuses on maximizing the return on investment by ensuring that marketing efforts lead to profitable outcomes. We track key metrics like conversions, customer acquisition costs, and lifetime value to measure the success of campaigns. By optimizing targeting, ad spend, and content strategies, businesses can improve efficiency and reduce costs while increasing revenue. Our analysis ensures each marketing dollar spent contributes to higher profitability and business growth.'
        }
    ];

    return (
        <div className="features">
            <div className="features-content">
                <h2>WHAT WE DO</h2>
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className={`feature-item ${activeIndex === index ? 'active' : ''}`}>
                            <h3 onClick={() => toggleContent(index)}>{feature.title}</h3>
                            {activeIndex === index && <p className="feature-content">{feature.content}</p>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Features;
import { Download, Link as LinkIcon, ExternalLink, Copy } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { useToast } from "@/hooks/use-toast";

const Article = () => {
  const { toast } = useToast();

  // Article Content Data
  const articleTitle = "Precigenetics Invites Public to View and Listen to Webcast of May 5 Conference Call with Analysts";
  const articleDate = "Tuesday, March 24, 2026 - 10:00am";
  
  // Plain text version for the "Copy Content" button
  const articleBodyText = `NEW YORK—(BUSINESS WIRE)— Precigenetics Inc. invites investors and the general public to view and listen to a webcast of a conference call with investment analysts at 10:00 a.m. EDT on Tuesday, May 5, 2026.

The purpose of the call is to provide an update on Precigenetics's results, as reflected in the company’s First Quarter 2026 Performance Report, to be issued that morning. Investors can access materials via the official investor relations portal.

"We are moving drug discovery beyond endpoint assays with our new real-time chemical imaging platform," said the leadership team. "This webcast will outline how preserving the temporal dimension of biology allows us to detect subtle but meaningful changes that are otherwise overlooked in traditional models."

To view and listen to the webcast and view the Performance Report, visit our web site at www.precigenetics.com/investors. Information on accessing and registering for the webcast will be available on the site starting today.

About Precigenetics
At Precigenetics, we apply science and our global resources to bring therapies to people that extend and significantly improve their lives. We strive to set the standard for quality, safety and value in the discovery, development and manufacture of health care products, including innovative medicines and vaccines.`;

  // Handlers for the Action Tray
  const handleDownloadPDF = () => {
    // Generate a perfectly formatted, clean document just for the PDF
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const printHTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Precigenetics_Press_Release</title>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
          <style>
            body { 
              font-family: 'Inter', sans-serif; 
              line-height: 1.6; 
              color: #000; 
              padding: 40px; 
              max-width: 800px; 
              margin: 0 auto; 
            }
            .header { 
              border-bottom: 2px solid #0f172a; 
              padding-bottom: 20px; 
              margin-bottom: 40px; 
              display: flex; 
              align-items: center; 
              justify-content: space-between; 
            }
            .logo-wrap { display: flex; align-items: center; gap: 12px; }
            .logo-icon { 
              width: 36px; height: 36px; background-color: #0f172a; border-radius: 50%; 
              display: flex; align-items: center; justify-content: center; 
            }
            .logo-text { font-size: 26px; font-weight: 700; color: #0f172a; letter-spacing: -0.5px; }
            .doc-type { font-size: 14px; font-weight: 700; color: #666; text-transform: uppercase; letter-spacing: 1px; }
            .title { font-size: 34px; font-weight: 700; margin-bottom: 16px; line-height: 1.2; color: #000; letter-spacing: -0.5px; }
            .date { color: #666; margin-bottom: 40px; font-size: 15px; font-weight: 500; }
            .content p { margin-bottom: 20px; font-size: 15px; line-height: 1.7; text-align: justify; }
            @media print {
              body { padding: 0; }
              @page { margin: 2cm; }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="logo-wrap">
              <div class="logo-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" stroke-width="2">
                  <circle cx="12" cy="12" r="3"></circle>
                  <circle cx="12" cy="5" r="1.5"></circle>
                  <circle cx="12" cy="19" r="1.5"></circle>
                  <line x1="12" y1="6.5" x2="12" y2="9"></line>
                  <line x1="12" y1="15" x2="12" y2="17.5"></line>
                </svg>
              </div>
              <div class="logo-text">Precigenetics</div>
            </div>
            <div class="doc-type">Press Release</div>
          </div>
          <div class="title">${articleTitle}</div>
          <div class="date">${articleDate}</div>
          <div class="content">
            <p><strong>NEW YORK—(BUSINESS WIRE)—</strong> Precigenetics Inc. invites investors and the general public to view and listen to a webcast of a conference call with investment analysts at 10:00 a.m. EDT on Tuesday, May 5, 2026.</p>
            <p>The purpose of the call is to provide an update on Precigenetics's results, as reflected in the company’s First Quarter 2026 Performance Report, to be issued that morning. Investors can access materials via the official investor relations portal.</p>
            <p>"We are moving drug discovery beyond endpoint assays with our new real-time chemical imaging platform," said the leadership team. "This webcast will outline how preserving the temporal dimension of biology allows us to detect subtle but meaningful changes that are otherwise overlooked in traditional models."</p>
            <p>To view and listen to the webcast and view the Performance Report, visit our web site at <u>www.precigenetics.com/investors</u>. Information on accessing and registering for the webcast will be available on the site starting today.</p>
            <p><strong>About Precigenetics</strong><br/>At Precigenetics, we apply science and our global resources to bring therapies to people that extend and significantly improve their lives. We strive to set the standard for quality, safety and value in the discovery, development and manufacture of health care products, including innovative medicines and vaccines.</p>
          </div>
          <script>
            // Wait for fonts and content to load, then trigger print
            window.onload = () => {
              window.print();
              // Attempt to close the tab after printing (handled safely)
              setTimeout(() => { window.close(); }, 500);
            };
          </script>
        </body>
      </html>
    `;

    printWindow.document.write(printHTML);
    printWindow.document.close();
  };

  const handleCopyLink = () => {
    let urlToCopy = window.location.href;
    
    // Convert YouTube embed URLs to standard watch URLs if applicable
    if (urlToCopy.includes('youtube.com/embed/')) {
      const videoId = urlToCopy.split('embed/')[1].split('?')[0];
      urlToCopy = `https://www.youtube.com/watch?v=${videoId}`;
    }

    navigator.clipboard.writeText(urlToCopy);
    toast({
      title: "Link copied!",
      description: "The URL has been copied to your clipboard.",
    });
  };

  const handleOpenNewTab = () => {
    window.open(window.location.href, '_blank');
  };

  const handleCopyContent = () => {
    const fullText = `${articleTitle}\n${articleDate}\n\n${articleBodyText}`;
    navigator.clipboard.writeText(fullText);
    toast({
      title: "Content copied!",
      description: "The article title and body have been copied to your clipboard.",
    });
  };

  return (
    <PageLayout title="News Article" description="Precigenetics Press Release and Announcements">
      
      {/* Wrapper to enforce the font family requested */}
      <div className="w-full bg-[#ffffff] pb-24" style={{ fontFamily: "'Inter', sans-serif" }}>
        
        {/* 1. Hero Banner (Abstract Wave/Gradient) */}
        <div 
          className="w-full h-[260px] bg-cover bg-center relative print:hidden"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=2000&auto=format&fit=crop')",
          }}
        >
          {/* Overlay to tint it slightly toward the brand color */}
          <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
        </div>

        {/* Main Page Container - Zoomed out feel */}
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 pt-10">
          
          {/* 2. Header Section (Starts ABOVE the sidebar split) */}
          <div className="w-full max-w-[900px] mb-12">
            
            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-6 print:hidden">
              <span className="text-primary border border-primary px-4 py-1.5 rounded-full text-[13px] font-medium cursor-pointer hover:bg-primary/5 transition-colors">
                Company News
              </span>
              <span className="text-primary border border-primary px-4 py-1.5 rounded-full text-[13px] font-medium cursor-pointer hover:bg-primary/5 transition-colors">
                Financial
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-[36px] md:text-[46px] font-semibold leading-[1.1] text-[#000000] mb-6 tracking-tight">
              {articleTitle}
            </h1>

            {/* Date */}
            <div className="text-[#666666] text-[16px]">
              {articleDate}
            </div>
          </div>

          {/* 3. Split Content Area (3/4th Left, 1/4th Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-[60px]">
            
            {/* Left Column: Main Article Content (3/4 Width) */}
            <main className="lg:col-span-3">
              
              {/* Action Tray (Strictly Black Icons) */}
              <div className="flex gap-6 mb-10 border-b border-slate-100 pb-6 print:hidden">
                <button onClick={handleDownloadPDF} className="text-[#000000] hover:text-primary transition-colors" title="Download PDF">
                  <Download className="w-6 h-6 stroke-[2]" />
                </button>
                <button onClick={handleCopyLink} className="text-[#000000] hover:text-primary transition-colors" title="Copy Link">
                  <LinkIcon className="w-6 h-6 stroke-[2]" />
                </button>
                <button onClick={handleOpenNewTab} className="text-[#000000] hover:text-primary transition-colors" title="Open in New Tab">
                  <ExternalLink className="w-6 h-6 stroke-[2]" />
                </button>
                <button onClick={handleCopyContent} className="text-[#000000] hover:text-primary transition-colors" title="Copy Article Content">
                  <Copy className="w-6 h-6 stroke-[2]" />
                </button>
              </div>

              {/* Article Text */}
              <div className="text-[18px] md:text-[19px] leading-[1.6] text-[#1a1a1a] space-y-6">
                <p>
                  <strong>NEW YORK—(BUSINESS WIRE)—</strong> Precigenetics Inc. invites investors and the general public to view and listen to a webcast of a conference call with investment analysts at 10:00 a.m. EDT on Tuesday, May 5, 2026.
                </p>

                <p>
                  The purpose of the call is to provide an update on Precigenetics's results, as reflected in the company’s First Quarter 2026 Performance Report, to be issued that morning. Investors can access materials via the official investor relations portal.
                </p>

                <p>
                  "We are moving drug discovery beyond endpoint assays with our new real-time chemical imaging platform," said the leadership team. "This webcast will outline how preserving the temporal dimension of biology allows us to detect subtle but meaningful changes that are otherwise overlooked in traditional models."
                </p>

                <p>
                  To view and listen to the webcast and view the Performance Report, visit our web site at <a href="#" className="text-primary underline hover:no-underline">www.precigenetics.com/investors</a>. Information on accessing and registering for the webcast will be available on the site starting today.
                </p>
                
                <p>
                  <strong>About Precigenetics</strong><br/>
                  At Precigenetics, we apply science and our global resources to bring therapies to people that extend and significantly improve their lives. We strive to set the standard for quality, safety and value in the discovery, development and manufacture of health care products, including innovative medicines and vaccines.
                </p>
              </div>
            </main>

            {/* Right Column: Sidebar Vertical (1/4 Width) */}
            <aside className="lg:col-span-1 flex flex-col gap-6 print:hidden">
              
              {/* News Alert Card */}
              <div className="bg-white border border-[#eeeeee] rounded-[6px] shadow-[0_2px_10px_rgba(0,0,0,0.02)] p-4">
                <img 
                  src="/image_f11abe.png"
                  alt="Living cells imaging and Pfizer News" 
                  className="w-full h-[150px] object-cover rounded-[4px] mb-5" 
                />
                <div>
                  <h2 className="text-primary text-[19px] font-semibold mb-2 leading-[1.3]">
                    Sign up for the latest Precigenetics news alerts
                  </h2>
                  <p className="text-[14px] text-[#666666] leading-[1.4]">
                    Receive real-time updates on our news delivered directly to your inbox.
                  </p>
                </div>
              </div>

              {/* Black Explore Card */}
              <div className="bg-[#000000] text-[#ffffff] p-6 rounded-[6px] min-h-[180px] flex items-end cursor-pointer hover:bg-[#1a1a1a] transition-colors">
                <h3 className="text-[28px] font-light leading-[1]">
                  Explore<br/>Precigenetics
                </h3>
              </div>

              {/* Related Resources Card */}
              <div className="bg-white border border-[#eeeeee] rounded-[6px] p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                <h4 className="mb-4 text-[14px] uppercase tracking-[1px] text-[#999999] font-semibold">
                  Related Resources
                </h4>
                <ul className="space-y-3 list-none p-0 m-0">
                  <li>
                    <a href="#" className="text-primary font-medium hover:underline">2025 Annual Report</a>
                  </li>
                  <li>
                    <a href="#" className="text-primary font-medium hover:underline">Investor Presentations</a>
                  </li>
                  <li>
                    <a href="#" className="text-primary font-medium hover:underline">Executive Leadership</a>
                  </li>
                  <li>
                    <a href="#" className="text-primary font-medium hover:underline">Platform Capabilities</a>
                  </li>
                </ul>
              </div>

            </aside>

          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Article;

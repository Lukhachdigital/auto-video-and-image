import React, { useState, useEffect } from 'react';
import Input from './shared/Input';
import Button from './shared/Button';

interface SettingsTabProps {
  apiKey: string;
  onApiKeyChange: (newKey: string) => void;
}

const SocialLink: React.FC<{ platform: string, url:string, handle: string, icon: React.ReactNode }> = ({ platform, url, handle, icon }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-4 p-4 bg-slate-900/50 hover:bg-slate-700/50 border border-slate-700 rounded-lg transition-colors duration-200"
  >
    <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center">
      {icon}
    </div>
    <div>
      <p className="font-bold text-white text-lg">{platform}</p>
    </div>
  </a>
);

const SettingsTab: React.FC<SettingsTabProps> = ({ apiKey, onApiKeyChange }) => {
  const [localApiKey, setLocalApiKey] = useState(apiKey);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saved'>('idle');

  useEffect(() => {
    setLocalApiKey(apiKey);
  }, [apiKey]);
  
  const handleSave = () => {
    onApiKeyChange(localApiKey);
    setSaveStatus('saved');
    setTimeout(() => setSaveStatus('idle'), 2000);
  };
    
  const YoutubeIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 48 48">
        <path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.3-8.8,0.5-15,0.5s-11.7-0.2-15-0.5c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24s0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.8,17.8,9.6,24,9.6s11.7,0.2,15,0.5c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.8,5.7,0.8,9.9S43.6,31.6,43.2,33.9z"></path><path fill="#FFF" d="M20 31L20 17 32 24z"></path>
    </svg>
  );

  const FacebookIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 48 48">
        <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.261,2.735-7.261,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
    </svg>
  );

  const TiktokIcon = (
    <svg width="32" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="12" fill="black"/>
        <path fill="white" d="M12.525 3.692v10.372c0 .524-.13 1.048-.383 1.513a3.39 3.39 0 0 1-2.023 1.905c-1.87.7-3.992-.17-4.69-1.87a3.34 3.34 0 0 1 1.74-4.522c.23-.105.475-.152.72-.152v-2.93c-.225-.015-.45-.03-.675-.03-2.925 0-5.295 2.37-5.295 5.295s2.37 5.295 5.295 5.295S14.625 17.07 14.625 14.1V8.657a4.99 4.99 0 0 0 2.228-4.215V3.692h-4.328Z"/>
    </svg>
  );

  const ZaloIcon = (
    <svg width="32" height="32" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="95" fill="white" stroke="#0190F3" strokeWidth="5"/>
      <path d="M100 35 C61.5 35 30 66.5 30 105 C30 134.7 48.4 159.2 75 168 L75 145 C60.7 138.3 50 123.1 50 105 C50 77.4 72.4 55 100 55 C127.6 55 150 77.4 150 105 C150 123.1 139.3 138.3 125 145 L125 168 C151.6 159.2 170 134.7 170 105 C170 66.5 138.5 35 100 35Z" fill="#0190F3"/>
      <text x="100" y="115" fontFamily="Arial, sans-serif" fontSize="60" fontWeight="bold" fill="white" textAnchor="middle">Zalo</text>
    </svg>
  );

  return (
    <div className="space-y-8 py-4">
      
      {/* API Key Section */}
      <div>
        <h3 className="text-xl font-bold text-white mb-2 text-center">Cấu hình API Key</h3>
        <p className="text-center text-gray-400 mb-4 text-sm">
            Bấm vào nút bên dưới để đến trang tạo Google AI API key của bạn.
        </p>
        <div className="text-center mb-4">
            <a
                href="https://aistudio.google.com/app/apikey"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white hover:bg-green-700 focus:ring-green-500 px-4 py-2 rounded-md font-bold text-sm transition-all duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800"
            >
                Nhận API Key tại đây
            </a>
        </div>
        <div className="max-w-md mx-auto bg-slate-900/50 p-6 rounded-lg border border-slate-700 space-y-4">
          <div>
            <label htmlFor="api-key-input" className="block text-sm font-semibold mb-2 text-gray-300">
              Google AI API Key của bạn
            </label>
            <Input
              id="api-key-input"
              type="password"
              placeholder="Nhập API key của bạn tại đây"
              value={localApiKey}
              onChange={(e) => setLocalApiKey(e.target.value)}
            />
            <p className="text-xs text-gray-500 mt-2">
              Key của bạn chỉ được lưu trong bộ nhớ cục bộ của trình duyệt. Nó không được chia sẻ với bất kỳ ai.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant="primary"
              className="flex-grow"
              onClick={handleSave}
              disabled={localApiKey === apiKey}
            >
              Lưu Key
            </Button>
            {saveStatus === 'saved' && (
              <p className="text-green-400 font-bold text-sm">Saved!</p>
            )}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div>
        <h3 className="text-xl font-bold text-white mb-4 text-center">Contact Information</h3>
        <p className="text-center text-gray-400 mb-8">
          Connect with Làm Youtube AI for support, updates, and more tutorials.
        </p>
      </div>
      <div className="max-w-md mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
        <SocialLink platform="Youtube" handle="@lukhach-digital" url="https://youtube.com/@lukhach-digital" icon={YoutubeIcon} />
        <SocialLink platform="Facebook" handle="huynhxuyenson" url="https://facebook.com/huynhxuyenson" icon={FacebookIcon} />
        <SocialLink platform="Tiktok" handle="@lamyoutubeai" url="https://tiktok.com/@lamyoutubeai" icon={TiktokIcon} />
        <SocialLink platform="Zalo" handle="0979.007.367" url="https://zalo.me/0979007367" icon={ZaloIcon} />
      </div>
    </div>
  );
};

export default SettingsTab;

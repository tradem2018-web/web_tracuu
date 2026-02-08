import { ContentData, Language } from './types';

export const CONTENT: Record<Language, ContentData> = {
  [Language.VI]: {
    nav: {
      home: 'Trang chủ',
      features: 'Giới thiệu',
      guide: 'Hướng dẫn',
      privacy: 'Bảo mật',
      contact: 'Liên hệ',
    },
    hero: {
      title: 'Tra cứu Địa chỉ sau Sáp nhập 2026',
      subtitle: 'Cập nhật thông tin địa giới hành chính và chuyển đổi địa chỉ theo Nghị quyết 76/2025/UBTVQH15.',
      download: 'Tải Ứng Dụng Ngay',
      learnMore: 'Tìm hiểu thêm',
    },
    intro: {
      title: 'Tại sao bạn cần Ứng dụng này?',
      description: 'Tra cứu Địa chỉ sau Sáp nhập là ứng dụng hỗ trợ tra cứu thông tin thay đổi địa giới hành chính mới nhất.\nĐây là giải pháp "cứu cánh" cho Shipper tránh lạc đường, Môi giới Bất động sản tư vấn pháp lý chính xác, Người kinh doanh cập nhật chứng từ và Người dân vùng sáp nhập làm thủ tục hành chính dễ dàng.',
      features: [
        {
          title: 'Tra cứu chuyển đổi',
          description: 'Nhập tên xã/phường cũ để xem tên mới, hoặc ngược lại.',
          iconName: 'Repeat'
        },
        {
          title: 'Định vị GPS',
          description: 'Xác định vị trí hiện tại thuộc đơn vị hành chính nào.',
          iconName: 'MapPin'
        },
        {
          title: 'Tra cứu từ Google Maps',
          description: 'Dán link vị trí bất kỳ từ Google Maps để tìm ngay thông tin hành chính của địa điểm đó.',
          iconName: 'Map'
        },
        {
          title: 'Danh bạ Hành Chính',
          description: 'Tìm nhanh số điện thoại/địa chỉ Công an, UBND, Thuế, BHXH.',
          iconName: 'BookUser'
        },
        {
          title: 'Dữ liệu Offline',
          description: 'Sử dụng mọi lúc mọi nơi không cần mạng.',
          iconName: 'WifiOff'
        }
      ],
      note: 'Lưu ý: Ứng dụng được phát triển phục vụ cộng đồng, dữ liệu được lấy từ các nguồn không chính thức nên kết quả mang tính chất tham khảo. Để có thông tin chính xác nhất, đề nghị xác nhận tại cơ quan có thẩm quyền'
    },
    guide: {
      title: 'Hướng dẫn sử dụng',
      steps: [
        {
          title: 'Tra Cứu Theo Địa Chỉ Cũ',
          content: 'Nhập tên phường/xã trước khi sáp nhập để xem tên mới.\nVí dụ: "Phường Linh Chiểu" -> Xem tên mới là "Phường Thủ Đức"'
        },
        {
          title: 'Tra Cứu Theo Địa Chỉ Mới',
          content: 'Nhập tên phường/xã sau khi sáp nhập để xem nguồn gốc.\nVí dụ: "Phường Thủ Đức" → Xem các phường cũ đã sáp nhập'
        },
        {
          title: 'Tra Cứu Theo GPS',
          content: 'Nhấn nút kính lúp để tự động xác định vị trí hiện tại của bạn.\nLưu ý: Cần cho phép truy cập vị trí và bật GPS'
        },
        {
          title: 'Tra Cứu Theo Link Maps',
          content: 'Mở Google Maps → Chọn một vị trí bất kỳ:\nCách 1 (Nhanh): Copy đường link Nhấn nút Chia sẻ -> Chọn ứng dụng "Tra Cứu". App sẽ tự mở → Dán link và tìm kiếm.\nCách 2: Sao chép đường liên kết -> Thoát Google Maps → Mở app và dán vào ô tìm kiếm'
        },
        {
          title: 'Tra cứu Cơ Quan Quản lý Nhà nước',
          content: 'Có 4 mục Công An, Hành chính công, Thuế, và Bảo hiểm xã hội: Có thể chọn từng mục hoặc tất cả, ngoài ra nên chọn theo địa danh để tìm và lọc được kết quả theo mong muốn'
        }
      ],
      tips: 'Mẹo: Kết quả hiển thị cả địa chỉ cũ và mới, kèm nút mở bản đồ để dễ dàng tìm đường.',
      shareText: 'Chia sẻ bạn bè: Bạn có thể chia sẻ ứng dụng nếu thấy hay qua hình thức gửi trực tiếp đường link tải ứng dụng qua Zalo Facebook...',
      team: 'Tracuudiachi_SSN Team - 2026'
    },
    privacy: {
      title: 'Chính sách Quyền riêng tư',
      lastUpdated: 'Cập nhật lần cuối: 04/02/2026',
      intro: 'Chính sách Quyền riêng tư này áp dụng cho ứng dụng Tra cứu Địa chỉ sau Sáp nhập (sau đây gọi tắt là "Ứng dụng") được phát triển bởi Tracuudiachi_SSN Team (sau đây gọi tắt là "Nhà cung cấp dịch vụ") dưới dạng dịch vụ hỗ trợ quảng cáo. Dịch vụ này được cung cấp "nguyên trạng".',
      sections: [
        {
          title: '1. Tuyên bố Từ chối Trách nhiệm Chính phủ',
          content: 'Ứng dụng này là dự án tư nhân và KHÔNG liên kết, được ủy quyền bởi, hoặc đại diện cho bất kỳ cơ quan chính phủ nào (bao gồm Chính phủ Việt Nam hay các cơ quan hành chính địa phương).\nDữ liệu trong ứng dụng về ranh giới hành chính và danh bạ được tổng hợp từ các nguồn công khai (như Nghị quyết 76/2025/UBTVQH15) chỉ nhằm mục đích tham khảo cho cộng đồng.\nChúng tôi không chịu trách nhiệm về tính chính xác tuyệt đối của thông tin. Vui lòng đối chiếu với văn bản chính thức khi làm thủ tục hành chính.'
        },
        {
          title: '2. Thu thập và Sử dụng Thông tin',
          content: '2.1 Dữ liệu Vị trí\nỨng dụng cho phép người dùng sử dụng GPS của thiết bị (Vị trí chính xác/tương đối) để xác định đơn vị hành chính hiện tại (Phường/Xã).\nCách sử dụng: Để hiển thị địa chỉ hiện tại và thông tin hành chính liên quan cho người dùng.\nLưu trữ: Dữ liệu vị trí được xử lý cục bộ trên thiết bị của bạn theo thời gian thực. Chúng tôi KHÔNG lưu trữ lịch sử vị trí, dữ liệu theo dõi hoặc truyền vị trí chính xác của bạn về máy chủ của chúng tôi.\nChia sẻ: Dữ liệu vị trí là tạm thời và không được chia sẻ với bên thứ ba, ngoại trừ yêu cầu từ Google AdMob để tối ưu hóa quảng cáo (chỉ vị trí tương đối, tuân thủ chính sách của Google).\n\n2.2 Quảng cáo\nỨng dụng sử dụng Google AdMob để hiển thị quảng cáo. AdMob có thể thu thập và sử dụng: ID Quảng cáo (AAID), Dữ liệu sử dụng, Thông tin thiết bị. Điều này giúp hỗ trợ duy trì Ứng dụng miễn phí.\n\n2.3 Phân tích\nChúng tôi sử dụng Google Firebase Analytics để hiểu cách Ứng dụng được sử dụng. Dữ liệu này được ẩn danh và tổng hợp.'
        },
        {
          title: '3. Bên Thứ Ba',
          content: 'Dữ liệu tổng hợp, ẩn danh được truyền định kỳ đến các dịch vụ bên ngoài để hỗ trợ Nhà cung cấp dịch vụ cải thiện Ứng dụng. Ứng dụng sử dụng các dịch vụ bên thứ ba có Chính sách Quyền riêng tư riêng: Google Play Services, AdMob, Google Analytics for Firebase.'
        },
        {
          title: '4. Quyền Riêng Tư Trẻ Em',
          content: 'Dịch vụ này không nhắm đến người dưới 13 tuổi. Chúng tôi không cố ý thu thập thông tin nhận dạng cá nhân từ trẻ em dưới 13 tuổi.'
        },
        {
          title: '5. Bảo Mật',
          content: 'Chúng tôi trân trọng sự tin tưởng của bạn khi cung cấp Thông tin Cá nhân, do đó chúng tôi nỗ lực sử dụng các phương tiện thương mại chấp nhận được để bảo vệ nó.'
        },
        {
          title: '6. Thay đổi Chính sách này',
          content: 'Chúng tôi có thể cập nhật Chính sách Quyền riêng tư theo thời gian. Do đó, bạn nên xem trang này định kỳ để biết các thay đổi.'
        },
        {
          title: '7. Liên Hệ',
          content: 'Nếu bạn có bất kỳ câu hỏi hoặc đề xuất nào về Chính sách Quyền riêng tư của chúng tôi, đừng ngần ngại liên hệ tại Email: support@tracuudiachi.online'
        }
      ]
    },
    contact: {
      title: 'Liên hệ với chúng tôi',
      namePlaceholder: 'Tên của bạn',
      emailPlaceholder: 'Email của bạn',
      messagePlaceholder: 'Nội dung tin nhắn',
      sendButton: 'Gửi Tin Nhắn',
      infoText: 'Chúng tôi luôn sẵn sàng lắng nghe ý kiến đóng góp của bạn để cải thiện ứng dụng tốt hơn.'
    },
    footer: {
      copyright: '© 2026 Tracuudiachi_SSN Team. All rights reserved.'
    }
  },
  [Language.EN]: {
    nav: {
      home: 'Home',
      features: 'Features',
      guide: 'Guide',
      privacy: 'Privacy',
      contact: 'Contact',
    },
    hero: {
      title: 'Post-Merger Address Lookup 2026',
      subtitle: 'Update administrative boundary information and address conversion per Resolution 76/2025/UBTVQH15.',
      download: 'Download App Now',
      learnMore: 'Learn More',
    },
    intro: {
      title: 'Why do you need this App?',
      description: 'Post-Merger Address Lookup helps citizens check the latest administrative boundary changes.\nIt is a "lifesaver" for Shippers to avoid getting lost, Real Estate Agents to provide accurate legal advice, Businesses to update documents, and Residents in merged areas to handle administrative procedures easily.',
      features: [
        {
          title: 'Conversion Lookup',
          description: 'Enter old ward/commune name to see the new one, or vice versa.',
          iconName: 'Repeat'
        },
        {
          title: 'GPS Positioning',
          description: 'Determine which administrative unit your current location belongs to.',
          iconName: 'MapPin'
        },
        {
          title: 'Lookup from Google Maps',
          description: 'Paste any location link from Google Maps to instantly find administrative info.',
          iconName: 'Map'
        },
        {
          title: 'Administrative Directory',
          description: 'Quickly find phone numbers/addresses of Police, People\'s Committee, Tax, Social Insurance.',
          iconName: 'BookUser'
        },
        {
          title: 'Offline Data',
          description: 'Use anytime, anywhere without internet.',
          iconName: 'WifiOff'
        }
      ],
      note: 'Note: The application serves the community; data is for reference purposes.'
    },
    guide: {
      title: 'User Guide',
      steps: [
        {
          title: 'Lookup by Old Address',
          content: 'Enter the ward/commune name before the merger to see the new name.\nExample: "Linh Chieu Ward" -> New name is "Thu Duc Ward"'
        },
        {
          title: 'Lookup by New Address',
          content: 'Enter the ward/commune name after the merger to see the origin.\nExample: "Thu Duc Ward" → View merged former wards'
        },
        {
          title: 'Lookup by GPS',
          content: 'Press the magnifying glass button to automatically determine your current location.\nNote: Location access and GPS must be enabled.'
        },
        {
          title: 'Lookup by Maps Link',
          content: 'Open Google Maps → Select any location:\nMethod 1 (Fast): Copy link -> Press Share -> Select "Tra Cứu" app. App opens automatically → Paste link and search.\nMethod 2: Copy link -> Exit Google Maps → Open app and paste into search box.'
        },
        {
          title: 'Lookup Government Agencies',
          content: 'There are 4 categories: Police, Public Administration, Tax, and Social Insurance. You can select individual categories or all. It is recommended to select by location to filter results as desired.'
        }
      ],
      tips: 'Tip: Results show both old and new addresses, with a button to open the map for easy navigation.',
      shareText: 'Share with friends: You can share the application if you find it useful via direct link on Zalo, Facebook...',
      team: 'Tracuudiachi_SSN Team - 2026'
    },
    privacy: {
      title: 'Privacy Policy',
      lastUpdated: 'Last updated: 04/02/2026',
      intro: 'This Privacy Policy applies to the "Post-Merger Address Lookup" app developed by Tracuudiachi_SSN Team as an ad-supported service. This service is provided "as is".',
      sections: [
        {
          title: '1. Government Disclaimer',
          content: 'This app is a private project and is NOT affiliated, authorized, or representative of any government agency.\nData regarding administrative boundaries is aggregated from public sources (e.g., Resolution 76/2025/UBTVQH15) for reference only.\nWe are not responsible for absolute accuracy. Please verify with official documents for administrative procedures.'
        },
        {
          title: '2. Information Collection and Use',
          content: '2.1 Location Data\nThe app uses your device GPS (Precise/Coarse Location) to determine the current administrative unit.\nUsage: To display current address and related info.\nStorage: Processed locally. We DO NOT store location history or transmit precise location to our servers.\nSharing: Temporary and not shared with third parties, except for Google AdMob requirements for ad optimization.\n\n2.2 Ads\nThe app uses Google AdMob. AdMob may collect: Advertising ID, Usage Data, Device Info to support the free app.\n\n2.3 Analytics\nWe use Google Firebase Analytics to understand app usage. Data is anonymized.'
        },
        {
          title: '3. Third Parties',
          content: 'Aggregated, anonymized data is transmitted to external services: Google Play Services, AdMob, Google Analytics for Firebase.'
        },
        {
          title: '4. Children\'s Privacy',
          content: 'This service is not directed to persons under 13. We do not knowingly collect PII from children under 13.'
        },
        {
          title: '5. Security',
          content: 'We value your trust in providing Personal Information and strive to use acceptable means to protect it.'
        },
        {
          title: '6. Changes to This Policy',
          content: 'We may update our Privacy Policy from time to time. You are advised to review this page periodically.'
        },
        {
          title: '7. Contact',
          content: 'If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at Email: support@tracuudiachi.online'
        }
      ]
    },
    contact: {
      title: 'Contact Us',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Your Email',
      messagePlaceholder: 'Message',
      sendButton: 'Send Message',
      infoText: 'We are always ready to listen to your feedback to improve the application.'
    },
    footer: {
      copyright: '© 2026 Tracuudiachi_SSN Team. All rights reserved.'
    }
  }
};
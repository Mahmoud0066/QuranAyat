QuranAyat
QuranAyat is an open-source project that provides an accessible API and data source for all Surahs and Ayahs of the Holy Quran in JSON format.

Features
Access to all Surahs and Ayahs of the Quran.
Simple JSON structure, easy to integrate into web and mobile apps.
Free, open-source, and ready for use in your projects.
Important Links
GitHub Repository: Mahmoud0066/QuranAyat
API (JSON) Link: quran.json
Usage Example
You can fetch the Quran data directly via the API link in your project. Example in JavaScript:

js
fetch('https://cdn.jsdelivr.net/gh/Mahmoud0066/QuranAyat/public/quran.json')
  .then(response => response.json())
  .then(data => {
    // Use Quran data here
    console.log(data);
  });
Data Structure
The quran.json file contains all Surahs and their Ayahs. Example structure:

JSON
[
 "1": [
    "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ (1)",
    "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ (2)",
    "الرَّحْمَٰنِ الرَّحِيمِ (3)",
    "مَالِكِ يَوْمِ الدِّينِ (4)",
    "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ (5)",
    "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ (6)",
    "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ (7)"
  ],
  // ...
]
Contribution
Contributions are welcome! If you want to improve or extend the project, please feel free to open an issue or submit a pull request via the GitHub repository.

License
This project is licensed under the MIT License.


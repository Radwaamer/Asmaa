import Button from "./components/Button";

export default function Home() {
  const cat= {slug:"deals",assets:[{url:"/assets/sideBarIcons/discount.png"}],name:"اخر العروض"};
  return (
    <div className="content py-20 text-center leading-9">
      <h4 className="text-2xl mb-4">ازيك يارب تكوني بخير ويومك جميل انا اسماء وتقدرى تقوليلي يا سمسمة</h4>
      <p>
        بما ان السرعة في التنفيذ هى اللي ميزتنى واحساسى الدائم بحبى للمساعدة في اختيار انسب حاجة تليق بيا وبكل اللي حواليا
        <br />
        قررت اعمل الويبسايت دا عشان اسهل عليكي عملية التواصل
        <br />
        اغلب الاسئلة اللي بتجيلي من نوعية رينج اسعارك كام؟ مكانك فين؟ ايه متاح عندك جاهز لمناسبة مستعجلة؟
        ايه نوع القماش اللي اجيبو؟ وريني شغل للاستايل دا عالطبيعة؟ الخ...
        <br />
        في الويبسايت هنا هتلاقي اجابات لاغلب ردودك عشان يوفر عليكي وقت طويل بعد ما تستقري عالشكل وتعرفي الخامات فتقدري تسألي عنها وعن توافرها واسعارها وتشوفي الديزاين عالطبيعة وتطمني
        <br />
        تقدري تبعتيلي الشكل اللي استقريتي عليه وطبعا مرحب بكل التعديلات اللي تحبيها وتناسبك وببلغك معاد تقدري تنوريني فيه اخد مقاساتك
        <br />
        <span className="font-bold text-lg">ملحوظة مهمة:</span> الاسعار ليست نهائية وممكن تقل او تزيد حسب التعديلات المطلوبة
        <br />
        <span className="font-bold text-xl">ملحوظة اهم من الملحوظة المهمة:</span> تقدري تنفذي اي ديزاين تاني في دماغك الشغل المعروض ما هو الا مساعدة ليكي لو بتدوري ومحتارة
        <br />
        <span className="mt-5 block text-2xl">وطبعا متنسيش تشوفي اخر العروض</span>
      </p>
      <div className="w-fit mx-auto scale-75 mt-3">
        <Button cat={cat} />
      </div>
    </div>
  );
}

# نشر دعم العربية كنسخة مشتقة على GitHub

## لماذا نستخدم Fork؟

إنشاء Fork من [المستودع الرسمي](https://github.com/deepseek-ai/deepseek-harness) يبقي علاقة النسخة بالمشروع الأصلي ظاهرة على GitHub، ويدرجها ضمن شبكة النسخ المشتقة. اسم `deepseek-harness-rtl-arabic` يضم عبارتي RTL وArabic ليسهل العثور على النسخة. هذه نسخة مجتمعية وليست إصداراً رسمياً من فريق DeepSeek.

## خطوات النشر الأولى

1. افتح المستودع الرسمي على GitHub واختر **Fork** ثم **Create a new fork**.
2. اختر الحساب الذي ستنشر منه، وسمّ المستودع `deepseek-harness-rtl-arabic` إذا كان الاسم متاحاً. احتفظ بخيار نسخ الفرع الأساسي فقط، فالنسخة العربية مبنية عليه.
3. أضف وصفاً واضحاً، مثل `Arabic RTL support for DeepSeek Harness: right-to-left chat and mixed Arabic-English text`، وأضف وسوم `arabic` و`rtl` و`deepseek-harness`.
4. راجع الفرق المحلي بين الفرع الرسمي وفرع دعم العربية، وافحص الملفات الجديدة بحثاً عن بيانات خاصة أو مفاتيح. لا تدفع أي ملفات إعداد محلية أو مجلدات مستخدم.
5. ادفع فرع التعديل المحلي إلى الـ Fork الجديد، ثم افتح طلب دمج **داخل نسختك** إلى فرع `master`. شغّل الفحوصات وراجع الفرق ثم ادمج الطلب. اجعل `master` الفرع الذي يراه الزائر وفيه دعم العربية.
6. افتح صفحة المستودع بعد الدمج وتأكد أن GitHub يعرض سطر `forked from deepseek-ai/deepseek-harness`، وأن `README.ar.md` ودليل التثبيت يظهران بالرابط الصحيح.

مثال أوامر الخطوة الخامسة، بعد استبدال `ACCOUNT` باسم حساب النشر:

```bash
git remote rename origin upstream
git remote add origin https://github.com/ACCOUNT/deepseek-harness-rtl-arabic.git
git push -u origin codex/arabic-support
```

من صفحة GitHub للنسخة الجديدة، اختر **Compare & pull request** للفرع `codex/arabic-support` واجعل جهة الدمج `ACCOUNT/deepseek-harness-rtl-arabic:master`. نفذ هذه الأوامر داخل المجلد المحلي للنسخة العربية فقط.

## متابعة تحديثات المصدر

1. من صفحة الـ Fork، افتح **Actions** وفعّل سير العمل إذا طلب GitHub ذلك. النسخ المشتقة قد تبدأ بسير عمل معطل.
2. في **Settings → Actions → General → Workflow permissions**، اسمح لسير العمل بإنشاء طلبات دمج. يحتاج `upstream-sync.yml` أيضاً إلى الصلاحيات التي يحددها داخل الملف: كتابة المحتوى وطلبات الدمج وتشغيل الفحوصات.
3. شغّل `Sync upstream` يدوياً أول مرة. إذا وجد تحديثاً رسمياً، تأكد أنه يفتح طلب دمج ويشغّل `Arabic support checks` على فرع التحديث. إذا لم يجد تحديثاً، ينتهي بلا طلب دمج.
4. راجع كل طلب دمج واختباراته قبل اعتماده. إذا بقي طلب تحديث مفتوحاً، ينتظر سير العمل إغلاقه قبل إنشاء طلب جديد. يحل سير العمل تلقائياً التعارض المعروف عند إضافة اعتماد جديد إلى `packages/bundle/web-app/package.json` مع الحفاظ على إضافة العربية. أي تعارض آخر يوقف التحديث للمراجعة اليدوية، ولا يغيّر فرع `master` تلقائياً.

قد تفشل مسارات المشروع الأصلي الخاصة بالنشر والمعاينة وواجهة API الحقيقية وإدارة البلاغات في نسخة مستقلة بسبب غياب مفاتيح وخدمات فريقه. عطّل هذه المسارات من إعدادات Actions في نسختك إذا لم تكن تستخدم خدماتها، وأبقِ `Arabic support checks` و`Sync upstream` نشطين. لا تضف مفاتيحك الخاصة إلى المستودع لمعالجة هذا الفشل.

تحديثات المصدر لا تعني أن مواقع GitHub الأخرى ستتحول تلقائياً إلى النسخة العربية. ظهور الـ Fork في شبكة المشروع الأصلي يسهّل العثور عليها، بينما الرابط والوصف والملف التعريفي يشرحون الفرق للزائر.

## مراجع GitHub الرسمية

- [إنشاء Fork](https://docs.github.com/en/pull-requests/how-tos/work-with-forks/fork-a-repo)
- [شبكة النسخ المشتقة](https://docs.github.com/en/pull-requests/reference/forks)
- [تشغيل سير العمل في Fork](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows)
- [صلاحيات GitHub Actions](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository)

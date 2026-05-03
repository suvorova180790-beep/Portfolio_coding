/**
 * Локализация приложения. Язык берётся из localStorage landingLang (как на index.html).
 */
(function (global) {
  "use strict";

  var STORAGE_LANG_KEY = "landingLang";
  var APP_LANG = "ru";

  var RU = {
    docTitle: "Приложение — Семейный бюджет",
    h1_app: "Ultimate Family Budget Pro",
    sub_title:
      "Версия с несколькими счетами, переводами, лимитами категорий, перерасходом, редактированием операций, целей и долгов, календарём, годовыми отчётами и прогнозом.",
    btn_home: "← На главную",
    btn_theme: "Сменить тему",
    btn_print: "Печать / PDF",
    btn_export_csv: "Экспорт CSV",
    btn_export_json: "Экспорт JSON",
    btn_import_json: "Импорт JSON",
    btn_reset_all: "Сбросить всё",
    tab_dashboard: "Dashboard",
    tab_operations: "Операции",
    tab_accounts: "Счета и переводы",
    tab_budgets: "Лимиты категорий",
    tab_calendar: "Календарь",
    tab_goals: "Цели",
    tab_debts: "Долги",
    tab_reports: "Отчёты",
    tab_settings: "Настройки",
    dash_month_summary: "Сводка по выбранному месяцу",
    lbl_month: "Месяц",
    lbl_year: "Год",
    lbl_reserve_pct: "Резерв, %",
    lbl_currency: "Валюта",
    kpi_income: "Доходы",
    kpi_expenses: "Расходы",
    kpi_balance: "Остаток",
    kpi_reserve: "Резерв",
    kpi_operations: "Операций",
    kpi_expense_pct: "Расходы от дохода",
    kpi_accounts_total: "Всего на счетах",
    kpi_overspent: "Перерасход категорий",
    kpi_active_goals: "Активные цели",
    kpi_active_debts: "Активные долги",
    kpi_show_goals: "Показать список целей",
    kpi_show_debts: "Показать список долгов",
    dash_panel_goals_title: "Список активных целей",
    dash_panel_debts_title: "Список активных долгов",
    budget_status_hint: "Добавьте операции, счета и лимиты, чтобы увидеть полный анализ бюджета.",
    tips_title: "Рекомендации и предупреждения",
    tips_default: "После добавления данных здесь появится автоматический анализ бюджета.",
    analytics_title: "Аналитика",
    chart_expense_structure: "Структура расходов",
    chart_monthly_ie: "Доходы и расходы по месяцам",
    chart_forecast_title: "Прогноз следующего месяца",
    forecast_income: "Прогноз дохода",
    forecast_expense: "Прогноз расхода",
    forecast_balance: "Прогноз остатка",
    forecast_note_default: "Прогноз строится по среднему значению последних месяцев.",
    forecast_no_data: "Недостаточно данных для прогноза.",
    forecast_note_avg: "Прогноз основан на среднем значении {n} последних месяцев.",
    op_form_title: "Добавить / редактировать операцию",
    lbl_date: "Дата",
    lbl_type: "Тип",
    op_income: "Доход",
    op_expense: "Расход",
    lbl_account: "Счёт",
    lbl_category: "Категория",
    lbl_amount: "Сумма",
    lbl_description: "Описание",
    ph_op_description: "Например: зарплата, аренда, продукты",
    btn_save_operation: "Сохранить операцию",
    btn_clear_form: "Очистить форму",
    btn_demo_data: "Заполнить демо-данными",
    op_note_accounts: "Для расходов и доходов можно выбрать счёт, к которому относится операция.",
    op_list_title: "Список операций",
    filter_all: "Все",
    filter_income_only: "Только доходы",
    filter_expense_only: "Только расходы",
    filter_transfer_only: "Только переводы",
    ph_filter_category: "Поиск категории",
    lbl_search: "Поиск",
    ph_filter_search: "Поиск по описанию",
    lbl_sort: "Сортировка",
    sort_date_desc: "Сначала новые",
    sort_date_asc: "Сначала старые",
    sort_amount_desc: "Сумма ↓",
    sort_amount_asc: "Сумма ↑",
    th_actions: "Действия",
    op_table_empty: "Операции пока не добавлены.",
    op_table_none: "Операции по выбранному фильтру не найдены.",
    accounts_title: "Счета",
    lbl_account_name: "Название счёта",
    ph_account_name: "Например: Наличные, Карта, Вклад",
    lbl_initial_balance: "Начальный баланс",
    btn_save_account: "Сохранить счёт",
    btn_clear_short: "Очистить",
    transfer_title: "Перевод между счетами",
    lbl_from_account: "Со счёта",
    lbl_to_account: "На счёт",
    lbl_comment: "Комментарий",
    ph_transfer: "Например: пополнение вклада",
    btn_do_transfer: "Сделать перевод",
    transfer_note: "Переводы не меняют общий бюджет семьи, но меняют остатки по конкретным счетам.",
    account_summary_title: "Сводка по счетам",
    budgets_form_title: "Лимиты по категориям",
    lbl_limit: "Лимит",
    btn_save_limit: "Сохранить лимит",
    budgets_table_title: "Контроль лимитов",
    th_period: "Период",
    th_limit: "Лимит",
    th_actual: "Факт",
    th_status: "Статус",
    budgets_empty: "Лимиты пока не добавлены.",
    status_overspent: "Перерасход",
    status_within: "В пределах лимита",
    calendar_title: "Календарь доходов и расходов по дням",
    btn_current_month: "Текущий месяц",
    btn_refresh: "Обновить",
    goals_form_title: "Добавить / редактировать цель",
    lbl_goal_name: "Название цели",
    lbl_goal_target: "Целевая сумма",
    lbl_goal_current: "Уже накоплено",
    lbl_deadline: "Срок",
    btn_save_goal: "Сохранить цель",
    goals_list_title: "Список целей",
    debts_form_title: "Добавить / редактировать долг",
    lbl_name: "Название",
    lbl_debt_total: "Общая сумма",
    lbl_debt_remaining: "Осталось выплатить",
    lbl_monthly_payment: "Ежемесячный платёж",
    btn_save_debt: "Сохранить долг",
    debts_list_title: "Список долгов",
    report_annual_title: "Годовой отчёт",
    btn_current_year: "Текущий год",
    th_ops_count: "Операций",
    report_empty_year: "Нет данных за выбранный год.",
    history_title: "История по месяцам",
    th_reserve: "Резерв",
    history_empty: "История пока пуста.",
    settings_title: "Настройки",
    lbl_default_reserve: "Резерв по умолчанию, %",
    lbl_currency_symbol: "Символ валюты",
    btn_apply: "Применить",
    settings_icons_title: "Иконки дашборда",
    settings_icons_note:
      "Настройте emoji для каждого блока сводки на вкладке Dashboard. Кнопка «Изменить» открывает окно ввода (до 3 символов).",
    settings_features_title: "Что умеет эта версия",
    settings_features_body:
      "1. Операции доходов, расходов и переводов.<br><br>2. Несколько счетов с расчётом остатка.<br><br>3. Лимиты по категориям и выявление перерасхода.<br><br>4. Редактирование операций, целей, долгов, счетов и бюджетов.<br><br>5. Календарь, отчёты, прогноз и экспорт данных.",
    modal_icon_title: "Иконка блока",
    lbl_emoji_input: "Emoji или до 3 символов",
    ph_emoji: "Например: 📊",
    modal_icon_hint: "Очистите поле и нажмите «Сохранить» или «По умолчанию», чтобы вернуть стандартную иконку.",
    btn_save: "Сохранить",
    btn_default: "По умолчанию",
    btn_cancel: "Отмена",
    btn_edit: "Изменить",
    btn_edit_short: "Редактировать",
    btn_delete: "Удалить",
    badge_transfer: "Перевод",
    badge_goal: "Цель",
    badge_debt: "Долг",
    goal_target_lbl: "Цель:",
    goal_saved_lbl: "Накоплено:",
    goal_deadline_lbl: "Срок:",
    goal_no_deadline: "не указан",
    goal_comment_lbl: "Комментарий:",
    debt_total_lbl: "Общая сумма:",
    debt_remaining_lbl: "Осталось выплатить:",
    debt_payment_lbl: "Ежемесячный платёж:",
    acc_initial_lbl: "Начальный баланс:",
    accounts_empty: "Счета пока не созданы.",
    goals_empty: "Цели пока не добавлены.",
    debts_empty: "Долги пока не добавлены.",
    dash_no_goals: "Нет активных целей. Добавьте их на вкладке «Цели».",
    dash_no_debts: "Нет активных долгов. Добавьте их на вкладке «Долги».",
    dash_goal_progress: "{cur} из {tgt}",
    dash_debt_line: "Осталось: {rem} · Платёж: {pay}",
    calendar_more: "ещё: {n}",
    calendar_transfer_line: "↔ Перевод: {amt}",
    chart_no_expenses: "Нет расходов для построения диаграммы",
    chart_total_expenses: "Всего расходов",
    chart_by_category: "Структура по категориям",
    chart_no_monthly: "Нет данных по месяцам для графика",
    chart_legend_income: "Доход",
    chart_legend_expense: "Расход",
    alert_settings_applied: "Настройки применены.",
    alert_save_account_fail: "Не удалось сохранить счёт.",
    alert_account_in_use: "Нельзя удалить счёт, который используется в операциях или переводах.",
    alert_save_transfer_fail: "Не удалось сохранить перевод.",
    alert_save_operation_fail: "Не удалось сохранить операцию.",
    alert_budget_fill: "Заполните месяц, год, категорию и лимит.",
    alert_save_goal_fail: "Не удалось сохранить цель.",
    alert_save_debt_fail: "Не удалось сохранить долг.",
    alert_export_empty: "Нет данных для экспорта.",
    alert_import_ok: "JSON успешно импортирован.",
    alert_import_fail: "Не удалось импортировать JSON. Проверьте файл.",
    confirm_reset_all: "Удалить все счета, операции, лимиты, цели, долги и настройки?",
    alert_demo_ok: "Демо-данные добавлены.",
    err_load_data: "Ошибка загрузки данных",
    status_add_ops: "Добавьте операции, чтобы увидеть анализ бюджета.",
    status_danger_month: "Опасный месяц: либо расходы превышают доходы, либо есть заметный перерасход по категориям.",
    status_tense_month: "Месяц напряжённый: бюджет под контролем, но есть зона риска.",
    status_good: "Бюджет устойчивый: есть положительный остаток и резерв.",
    status_ok_reserve_low: "Бюджет положительный, но резерв пока ниже желаемого уровня.",
    tip_need_income: "Добавьте хотя бы одну доходную операцию, чтобы анализ был полноценным.",
    tip_deficit: "У вас дефицит бюджета: расходы выше доходов.",
    tip_high_load: "Расходы превышают 80% от дохода. Это высокий уровень нагрузки.",
    tip_top_cat: "Самая крупная категория расходов: {cat} ({amt}).",
    tip_debt_high: "Платежи по долгам выше 30% дохода. Это повышает финансовые риски.",
    tip_active_goals: "Незавершённых целей: {n}. Имеет смысл выделить отдельный ежемесячный взнос.",
    tip_overspend_cat: "Перерасход по категории «{cat}»: лимит {lim}, факт {act}.",
    tip_negative_acc: "Есть счёт с отрицательным остатком. Проверьте переводы и расходные операции.",
    tip_stable: "Бюджет выглядит устойчивым. Продолжайте вести учёт и сравнивать факт с лимитами.",
    csv_h_date: "Дата",
    csv_h_type: "Тип",
    csv_h_account: "Счёт",
    csv_h_category: "Категория",
    csv_h_desc: "Описание",
    csv_h_amount: "Сумма",
    csv_h_from: "Из счёта",
    csv_h_to: "На счёт",
    val_transfer_date: "Укажите корректную дату перевода.",
    val_transfer_amount: "Сумма перевода должна быть больше нуля.",
    val_transfer_from: "Выберите счёт списания.",
    val_transfer_to: "Выберите счёт зачисления.",
    val_transfer_diff: "Счёт отправки и счёт получения должны различаться.",
    val_transfer_from_missing: "Счёт списания не найден.",
    val_transfer_to_missing: "Счёт зачисления не найден.",
    val_account_name: "Введите название счёта.",
    val_account_balance: "Начальный баланс должен быть числом.",
    val_op_type: "Некорректный тип операции.",
    val_op_date: "Укажите корректную дату.",
    val_op_account: "Выберите счёт.",
    val_op_account_missing: "Выбранный счёт не найден.",
    val_op_category: "Выберите категорию.",
    val_op_amount: "Сумма должна быть больше нуля.",
    val_goal_name: "Введите название цели.",
    val_goal_target: "Целевая сумма должна быть больше нуля.",
    val_goal_current: "Накопленная сумма не может быть отрицательной.",
    val_goal_deadline: "Укажите корректный срок цели.",
    val_debt_name: "Введите название долга.",
    val_debt_total: "Общая сумма долга должна быть больше нуля.",
    val_debt_remaining_neg: "Остаток долга не может быть отрицательным.",
    val_debt_remaining_high: "Остаток долга не может быть больше общей суммы.",
    val_debt_payment: "Ежемесячный платёж не может быть отрицательным.",
    err_account_not_found: "Счёт для обновления не найден.",
    err_operation_not_found: "Операция для обновления не найдена.",
    err_goal_not_found: "Цель для обновления не найдена.",
    err_debt_not_found: "Долг для обновления не найден.",
    dash_income: "Доходы",
    dash_expenses: "Расходы",
    dash_balance: "Остаток",
    dash_reserve: "Резерв",
    dash_operations: "Операций",
    dash_expensePercent: "Расходы от дохода",
    dash_accountsTotal: "Всего на счетах",
    dash_overspent: "Перерасход категорий",
    dash_goals: "Активные цели",
    dash_debts: "Активные долги",
    report_no_data: "Нет данных.",
    th_income_col: "Доход",
    th_expense_col: "Расход",
    th_balance_col: "Остаток",
    th_expense_pct: "Расходы, %"
  };

  var EN = {};
  for (var k in RU) {
    if (!Object.prototype.hasOwnProperty.call(RU, k)) continue;
    EN[k] = RU[k];
  }

  EN.docTitle = "App — Family budget";
  EN.h1_app = "Ultimate Family Budget Pro";
  EN.sub_title =
    "Multiple accounts, transfers, category limits, overspending alerts, editable transactions, goals and debts, calendar, yearly reports, and forecast.";
  EN.btn_home = "← Home";
  EN.btn_theme = "Toggle theme";
  EN.btn_print = "Print / PDF";
  EN.btn_export_csv = "Export CSV";
  EN.btn_export_json = "Export JSON";
  EN.btn_import_json = "Import JSON";
  EN.btn_reset_all = "Reset all";
  EN.tab_dashboard = "Dashboard";
  EN.tab_operations = "Transactions";
  EN.tab_accounts = "Accounts & transfers";
  EN.tab_budgets = "Category limits";
  EN.tab_calendar = "Calendar";
  EN.tab_goals = "Goals";
  EN.tab_debts = "Debts";
  EN.tab_reports = "Reports";
  EN.tab_settings = "Settings";
  EN.dash_month_summary = "Summary for selected month";
  EN.lbl_month = "Month";
  EN.lbl_year = "Year";
  EN.lbl_reserve_pct = "Reserve, %";
  EN.lbl_currency = "Currency";
  EN.kpi_income = "Income";
  EN.kpi_expenses = "Expenses";
  EN.kpi_balance = "Balance";
  EN.kpi_reserve = "Reserve";
  EN.kpi_operations = "Transactions";
  EN.kpi_expense_pct = "Expenses vs income";
  EN.kpi_accounts_total = "Total in accounts";
  EN.kpi_overspent = "Categories over limit";
  EN.kpi_active_goals = "Active goals";
  EN.kpi_active_debts = "Active debts";
  EN.kpi_show_goals = "Show goals list";
  EN.kpi_show_debts = "Show debts list";
  EN.dash_panel_goals_title = "Active goals";
  EN.dash_panel_debts_title = "Active debts";
  EN.budget_status_hint = "Add transactions, accounts, and limits to see the full budget picture.";
  EN.tips_title = "Tips and warnings";
  EN.tips_default = "After you add data, automatic budget insights will appear here.";
  EN.analytics_title = "Analytics";
  EN.chart_expense_structure = "Expense breakdown";
  EN.chart_monthly_ie = "Income and expenses by month";
  EN.chart_forecast_title = "Next month forecast";
  EN.forecast_income = "Forecast income";
  EN.forecast_expense = "Forecast expenses";
  EN.forecast_balance = "Forecast balance";
  EN.forecast_note_default = "Forecast uses the average of recent months.";
  EN.forecast_no_data = "Not enough data for a forecast.";
  EN.forecast_note_avg = "Forecast is based on the average of the last {n} months.";
  EN.op_form_title = "Add / edit transaction";
  EN.lbl_date = "Date";
  EN.lbl_type = "Type";
  EN.op_income = "Income";
  EN.op_expense = "Expense";
  EN.lbl_account = "Account";
  EN.lbl_category = "Category";
  EN.lbl_amount = "Amount";
  EN.lbl_description = "Description";
  EN.ph_op_description = "e.g. salary, rent, groceries";
  EN.btn_save_operation = "Save transaction";
  EN.btn_clear_form = "Clear form";
  EN.btn_demo_data = "Fill demo data";
  EN.op_note_accounts = "Pick the account this income or expense belongs to.";
  EN.op_list_title = "Transaction list";
  EN.filter_all = "All";
  EN.filter_income_only = "Income only";
  EN.filter_expense_only = "Expenses only";
  EN.filter_transfer_only = "Transfers only";
  EN.ph_filter_category = "Search category";
  EN.lbl_search = "Search";
  EN.ph_filter_search = "Search in description";
  EN.lbl_sort = "Sort";
  EN.sort_date_desc = "Newest first";
  EN.sort_date_asc = "Oldest first";
  EN.sort_amount_desc = "Amount ↓";
  EN.sort_amount_asc = "Amount ↑";
  EN.th_actions = "Actions";
  EN.op_table_empty = "No transactions yet.";
  EN.op_table_none = "No transactions match the filters.";
  EN.accounts_title = "Accounts";
  EN.lbl_account_name = "Account name";
  EN.ph_account_name = "e.g. Cash, Card, Savings";
  EN.lbl_initial_balance = "Starting balance";
  EN.btn_save_account = "Save account";
  EN.btn_clear_short = "Clear";
  EN.transfer_title = "Transfer between accounts";
  EN.lbl_from_account = "From account";
  EN.lbl_to_account = "To account";
  EN.lbl_comment = "Note";
  EN.ph_transfer = "e.g. top up savings";
  EN.btn_do_transfer = "Transfer";
  EN.transfer_note = "Transfers don’t change household totals, only balances per account.";
  EN.account_summary_title = "Account summary";
  EN.budgets_form_title = "Category limits";
  EN.lbl_limit = "Limit";
  EN.btn_save_limit = "Save limit";
  EN.budgets_table_title = "Limit tracking";
  EN.th_period = "Period";
  EN.th_limit = "Limit";
  EN.th_actual = "Actual";
  EN.th_status = "Status";
  EN.budgets_empty = "No limits yet.";
  EN.status_overspent = "Over limit";
  EN.status_within = "Within limit";
  EN.calendar_title = "Income & expenses by day";
  EN.btn_current_month = "This month";
  EN.btn_refresh = "Refresh";
  EN.goals_form_title = "Add / edit goal";
  EN.lbl_goal_name = "Goal name";
  EN.lbl_goal_target = "Target amount";
  EN.lbl_goal_current = "Saved so far";
  EN.lbl_deadline = "Deadline";
  EN.btn_save_goal = "Save goal";
  EN.goals_list_title = "Goals";
  EN.debts_form_title = "Add / edit debt";
  EN.lbl_name = "Name";
  EN.lbl_debt_total = "Total amount";
  EN.lbl_debt_remaining = "Remaining";
  EN.lbl_monthly_payment = "Monthly payment";
  EN.btn_save_debt = "Save debt";
  EN.debts_list_title = "Debts";
  EN.report_annual_title = "Annual report";
  EN.btn_current_year = "This year";
  EN.th_ops_count = "Transactions";
  EN.report_empty_year = "No data for this year.";
  EN.history_title = "History by month";
  EN.th_reserve = "Reserve";
  EN.history_empty = "No history yet.";
  EN.settings_title = "Settings";
  EN.lbl_default_reserve = "Default reserve, %";
  EN.lbl_currency_symbol = "Currency symbol";
  EN.btn_apply = "Apply";
  EN.settings_icons_title = "Dashboard icons";
  EN.settings_icons_note =
    "Set emoji for each summary block on the Dashboard tab. “Edit” opens a short text field (up to 3 symbols).";
  EN.settings_features_title = "What this version does";
  EN.settings_features_body =
    "1. Income, expense, and transfer transactions.<br><br>2. Multiple accounts with balance tracking.<br><br>3. Category limits and overspend detection.<br><br>4. Edit transactions, goals, debts, accounts, and budgets.<br><br>5. Calendar, reports, forecast, and data export.";
  EN.modal_icon_title = "Block icon";
  EN.lbl_emoji_input = "Emoji or up to 3 characters";
  EN.ph_emoji = "e.g. 📊";
  EN.modal_icon_hint = "Clear the field and press “Save” or “Default” to restore the standard icon.";
  EN.btn_save = "Save";
  EN.btn_default = "Default";
  EN.btn_cancel = "Cancel";
  EN.btn_edit = "Edit";
  EN.btn_edit_short = "Edit";
  EN.btn_delete = "Delete";
  EN.badge_transfer = "Transfer";
  EN.badge_goal = "Goal";
  EN.badge_debt = "Debt";
  EN.goal_target_lbl = "Target:";
  EN.goal_saved_lbl = "Saved:";
  EN.goal_deadline_lbl = "Deadline:";
  EN.goal_no_deadline = "not set";
  EN.goal_comment_lbl = "Note:";
  EN.debt_total_lbl = "Total:";
  EN.debt_remaining_lbl = "Remaining:";
  EN.debt_payment_lbl = "Monthly payment:";
  EN.acc_initial_lbl = "Starting balance:";
  EN.accounts_empty = "No accounts yet.";
  EN.goals_empty = "No goals yet.";
  EN.debts_empty = "No debts yet.";
  EN.dash_no_goals = "No active goals. Add some on the Goals tab.";
  EN.dash_no_debts = "No active debts. Add some on the Debts tab.";
  EN.dash_goal_progress = "{cur} of {tgt}";
  EN.dash_debt_line = "Left: {rem} · Payment: {pay}";
  EN.calendar_more = "more: {n}";
  EN.calendar_transfer_line = "↔ Transfer: {amt}";
  EN.chart_no_expenses = "No expenses to chart";
  EN.chart_total_expenses = "Total expenses";
  EN.chart_by_category = "By category";
  EN.chart_no_monthly = "No monthly data for chart";
  EN.chart_legend_income = "Income";
  EN.chart_legend_expense = "Expense";
  EN.alert_settings_applied = "Settings saved.";
  EN.alert_save_account_fail = "Could not save account.";
  EN.alert_account_in_use = "Cannot delete an account used in transactions or transfers.";
  EN.alert_save_transfer_fail = "Could not save transfer.";
  EN.alert_save_operation_fail = "Could not save transaction.";
  EN.alert_budget_fill = "Fill in month, year, category, and limit.";
  EN.alert_save_goal_fail = "Could not save goal.";
  EN.alert_save_debt_fail = "Could not save debt.";
  EN.alert_export_empty = "Nothing to export.";
  EN.alert_import_ok = "JSON imported successfully.";
  EN.alert_import_fail = "Could not import JSON. Check the file.";
  EN.confirm_reset_all = "Delete all accounts, transactions, limits, goals, debts, and settings?";
  EN.alert_demo_ok = "Demo data added.";
  EN.err_load_data = "Error loading data";
  EN.status_add_ops = "Add transactions to see budget analysis.";
  EN.status_danger_month = "Tough month: expenses exceed income or several categories are over limit.";
  EN.status_tense_month = "Tight month: under control but watch the risk areas.";
  EN.status_good = "Solid budget: positive balance and reserve.";
  EN.status_ok_reserve_low = "Positive budget, but reserve is below your target.";
  EN.tip_need_income = "Add at least one income transaction for meaningful analysis.";
  EN.tip_deficit = "Budget deficit: expenses exceed income.";
  EN.tip_high_load = "Expenses are over 80% of income — a heavy load.";
  EN.tip_top_cat = "Largest expense category: {cat} ({amt}).";
  EN.tip_debt_high = "Debt payments exceed 30% of income — higher risk.";
  EN.tip_active_goals = "Open goals: {n}. Consider a fixed monthly contribution.";
  EN.tip_overspend_cat = 'Over limit in "{cat}": limit {lim}, actual {act}.';
  EN.tip_negative_acc = "An account has a negative balance. Check transfers and expenses.";
  EN.tip_stable = "Budget looks stable. Keep tracking and compare actuals to limits.";
  EN.csv_h_date = "Date";
  EN.csv_h_type = "Type";
  EN.csv_h_account = "Account";
  EN.csv_h_category = "Category";
  EN.csv_h_desc = "Description";
  EN.csv_h_amount = "Amount";
  EN.csv_h_from = "From account";
  EN.csv_h_to = "To account";
  EN.val_transfer_date = "Enter a valid transfer date.";
  EN.val_transfer_amount = "Transfer amount must be greater than zero.";
  EN.val_transfer_from = "Choose the debit account.";
  EN.val_transfer_to = "Choose the credit account.";
  EN.val_transfer_diff = "From and to accounts must differ.";
  EN.val_transfer_from_missing = "Debit account not found.";
  EN.val_transfer_to_missing = "Credit account not found.";
  EN.val_account_name = "Enter an account name.";
  EN.val_account_balance = "Starting balance must be a number.";
  EN.val_op_type = "Invalid transaction type.";
  EN.val_op_date = "Enter a valid date.";
  EN.val_op_account = "Choose an account.";
  EN.val_op_account_missing = "Selected account not found.";
  EN.val_op_category = "Choose a category.";
  EN.val_op_amount = "Amount must be greater than zero.";
  EN.val_goal_name = "Enter a goal name.";
  EN.val_goal_target = "Target must be greater than zero.";
  EN.val_goal_current = "Saved amount cannot be negative.";
  EN.val_goal_deadline = "Enter a valid goal deadline.";
  EN.val_debt_name = "Enter a debt name.";
  EN.val_debt_total = "Total debt must be greater than zero.";
  EN.val_debt_remaining_neg = "Remaining cannot be negative.";
  EN.val_debt_remaining_high = "Remaining cannot exceed total.";
  EN.val_debt_payment = "Monthly payment cannot be negative.";
  EN.err_account_not_found = "Account to update not found.";
  EN.err_operation_not_found = "Transaction to update not found.";
  EN.err_goal_not_found = "Goal to update not found.";
  EN.err_debt_not_found = "Debt to update not found.";
  EN.dash_income = "Income";
  EN.dash_expenses = "Expenses";
  EN.dash_balance = "Balance";
  EN.dash_reserve = "Reserve";
  EN.dash_operations = "Transactions";
  EN.dash_expensePercent = "Expenses vs income";
  EN.dash_accountsTotal = "Total in accounts";
  EN.dash_overspent = "Over limit (categories)";
  EN.dash_goals = "Active goals";
  EN.dash_debts = "Active debts";
  EN.report_no_data = "No data.";
  EN.th_income_col = "Income";
  EN.th_expense_col = "Expense";
  EN.th_balance_col = "Balance";
  EN.th_expense_pct = "Expenses, %";

  var INCOME_CATEGORIES_EN = [
    "Salary",
    "Side jobs",
    "Bonus",
    "Benefits",
    "Rental income",
    "Investments",
    "Gift",
    "Other income"
  ];

  var EXPENSE_CATEGORIES_EN = [
    "Housing",
    "Utilities",
    "Loans",
    "Transport",
    "Education",
    "Healthcare",
    "Groceries",
    "Children",
    "Entertainment",
    "Shopping",
    "Gifts",
    "Travel",
    "Repairs",
    "Other expenses"
  ];

  var MONTHS_EN = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  var WEEK_DAYS_EN = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  /** Стандартные счета (id из app.html) — подпись на английском при en. */
  var KNOWN_ACCOUNT_EN_BY_ID = {
    "acc-cash": "Cash",
    "acc-card": "Card",
    "acc-deposit": "Savings"
  };

  /** Если id другой, но название совпало с дефолтным RU — тоже показываем EN. */
  var KNOWN_ACCOUNT_EN_BY_NAME_RU = {
    Наличные: "Cash",
    Карта: "Card",
    Вклад: "Savings"
  };

  function getAccountDisplayName(acc) {
    if (!acc || typeof acc.name !== "string") return "";
    if (APP_LANG !== "en") return acc.name;
    var byId = KNOWN_ACCOUNT_EN_BY_ID[acc.id];
    if (byId) return byId;
    var byName = KNOWN_ACCOUNT_EN_BY_NAME_RU[acc.name];
    if (byName) return byName;
    return acc.name;
  }

  function initAppLangFromLanding() {
    try {
      var v = localStorage.getItem(STORAGE_LANG_KEY);
      if (v === "en" || v === "ru") APP_LANG = v;
    } catch (e) {}
    document.documentElement.lang = APP_LANG === "en" ? "en" : "ru";
  }

  function t(key) {
    var pack = APP_LANG === "en" ? EN : RU;
    if (pack[key] !== undefined) return pack[key];
    if (RU[key] !== undefined) return RU[key];
    return key;
  }

  function tf(key, vars) {
    var s = t(key);
    if (!vars) return s;
    for (var p in vars) {
      if (!Object.prototype.hasOwnProperty.call(vars, p)) continue;
      s = s.split("{" + p + "}").join(String(vars[p]));
    }
    return s;
  }

  function getAppLang() {
    return APP_LANG;
  }

  global.AppI18n = {
    init: initAppLangFromLanding,
    t: t,
    tf: tf,
    getLang: getAppLang,
    getAccountDisplayName: getAccountDisplayName,
    MONTHS_EN: MONTHS_EN,
    WEEK_DAYS_EN: WEEK_DAYS_EN,
    INCOME_CATEGORIES_EN: INCOME_CATEGORIES_EN,
    EXPENSE_CATEGORIES_EN: EXPENSE_CATEGORIES_EN
  };
})(typeof window !== "undefined" ? window : globalThis);

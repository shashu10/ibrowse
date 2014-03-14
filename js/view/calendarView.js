var CalendarView = function(container,model)
{
	// Month calendar
	var monthCalContainer = $("<div id='cal'>");
	var monthCalendarView = new MonthCalendarView(monthCalContainer,model);
	var monthCalendarController = new MonthCalendarController(monthCalendarView,model);

	// Day calendar
	var dayCalContainer = $("<div id='daycal'>");
	var dayCalendarView = new DayCalendarView(dayCalContainer,model);
	var dayCalendarController = new DayCalendarController(dayCalendarView,model);

	container.append(monthCalContainer);
	container.append(dayCalContainer);
}
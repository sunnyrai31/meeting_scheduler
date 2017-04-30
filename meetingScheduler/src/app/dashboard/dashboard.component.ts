import { Component, OnInit } from '@angular/core';
import { DatePipe } from'@angular/common';

declare var jQuery: any;
declare var moment: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	this.generateCalender();
  }

  generateCalender() {
  		jQuery(document).ready(function() {
		    
		    var calendar = jQuery('#calendar').fullCalendar({
		        defaultView: 'agendaWeek',
		        header: {
		            left: 'prev,next today',
		            center: 'title',
		            right: 'month,agendaWeek,agendaDay'
		        },
		        
		        selectable: true,
		        
		        editable: true,
		        
		        /* click handler */
				select: function(start, end, allDay) {
					var endtime = jQuery.fullCalendar.formatDate(end,'h:mm tt');
					var starttime = jQuery.fullCalendar.formatDate(start,'ddd, MMM d, h:mm tt');
					var mywhen = starttime + ' - ' + endtime;
					jQuery('#createEventModal #apptStartTime').val(start);
					jQuery('#createEventModal #apptEndTime').val(end);
					jQuery('#createEventModal #apptAllDay').val(allDay);
					jQuery('#createEventModal #when').text(mywhen);
					jQuery('#createEventModal').modal('show');
				}

		    });
		    
		});
  }

  createMeeting(){
    jQuery("#createEventModal").modal('hide');
    console.log(jQuery('#apptStartTime').val());
    console.log(jQuery('#apptEndTime').val());
    console.log(jQuery('#apptAllDay').val());
    alert("form submitted");
        
    jQuery("#calendar").fullCalendar('renderEvent',
        {
            title: jQuery('#patientName').val(),
            start: new Date(jQuery('#apptStartTime').val()),
            end: new Date(jQuery('#apptEndTime').val()),
            allDay: (jQuery('#apptAllDay').val() == "true"),
        },
        true);
   }

}




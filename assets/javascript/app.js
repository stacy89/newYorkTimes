$(document).ready(function() {
	$("#search").on("click", function() {
		var searchTerm = $("#search-term").val();
		var numRecordRetrieve = $("#num-records-retrieve").val();
		var startYear = $("#start-year").val();
		var endYear = $("#end-year").val();
		console.log(searchTerm, numRecordRetrieve, startYear, endYear);
	});
});
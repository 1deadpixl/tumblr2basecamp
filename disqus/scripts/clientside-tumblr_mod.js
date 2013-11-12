<script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
<script type="text/javascript">
	var disqus_shortname = 'groupscrew';
	(function() {
		var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
		dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
		(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
	})();
	var disqus_config = function() {
		
		this.callbacks.onNewComment = [function(comment) { 
		
			$.post("http://psenzler.com/dev/groupscrew/sendnotification.php", { comment: comment.id }, function(result){
			
				console.log(result);
				
			});
			
		}];
	};
</script>
<noscript>Please enable JavaScript to view the <a href="http://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
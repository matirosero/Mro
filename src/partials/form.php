				<?php
				if (!empty($error_msg)) {
					echo '<p class="alert-box alert">ERROR: '. implode("<br />", $error_msg) . "</p>";
				}
				if ($result != NULL) {
					echo '<p class="alert-box success">'. $result . "</p>";
				}
				?>

				<form action="<?php echo basename(__FILE__); ?>" method="post">
					<noscript>
						<p><input type="hidden" name="nojs" id="nojs" /></p>
					</noscript>

					<div class="row">
						<div class="large-12 columns">
							<label for="name">Your name *</label>
							<input type="text" name="name" id="name" value="<?php get_data("name"); ?>" placeholder="<?php echo $lang['FORM_NAME_PLACEHOLDER']; ?>" />
	            		</div>
	          		</div>
	          		<div class="row">
						<div class="small-12 large-6 columns">
							<label for="email">Your e-mail *</label>
							<input type="text" name="email" id="email" value="<?php get_data("email"); ?>" placeholder="<?php echo $lang['FORM_EMAIL_PLACEHOLDER']; ?>" />
	            		</div>
	          		</div>
	          		<div class="row">
				  		<div class="large-12 columns">
				  			<label for="comments">Your message *</label>
				  			<textarea name="comments" id="comments" placeholder="<?php echo $lang['FORM_COMMENTS_PLACEHOLDER']; ?>"><?php get_data("comments"); ?></textarea>
		            	</div>
	          		</div>

	          		<div class="row">
		          		<div class="large-12 columns">
			          		<button type="submit" name="submit" id="submit" class="button secondary radius" <?php if (isset($disable) && $disable === true) echo ' disabled="disabled"'; ?>><?php echo $lang['FORM_SEND']; ?></button>

		          		</div>
	          		</div>
				</form>